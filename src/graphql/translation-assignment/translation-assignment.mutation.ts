import { resolver as rs } from 'graphql-sequelize';
import { createWriteStream, unlink } from 'fs';
import * as shortid from 'shortid';
import {
    TranslationAssignment, TranslationAssignmentFile
} from '../../models';
import to from 'await-to-js';
const Promise = require('bluebird');
const mkdirp = require('mkdirp');

const UPLOAD_DIR = './public/data/uploads';
mkdirp.sync(UPLOAD_DIR);

const storeUpload = async (upload) => {
    const { createReadStream, filename, mimetype } = await upload.originFileObj.promise;
    const stream = createReadStream();
    const id = shortid.generate();
    const path = `${UPLOAD_DIR}/${id}-${filename}`;
    const files = { id, filename, mimetype, path };

    // Store the file in the filesystem.
    await new Promise((resolve, reject) => {
        // Create a stream to which the upload will be written.
        const writeStream = createWriteStream(path);

        // When the upload is fully written, resolve the promise.
        writeStream.on('finish', resolve);

        // If there's an error writing the file, remove the partially written file
        // and reject the promise.
        writeStream.on('error', (error) => {
            console.log('ERRORRR');
            unlink(path, () => {
                reject(error);
            });
        });

        // In Node.js <= v13, errors are not automatically propagated between piped
        // streams. If there is an error receiving the upload, destroy the write
        // stream with the corresponding error.
        stream.on('error', (error) => {
            console.log('ERROR');
            writeStream.destroy(error);
        });

        // Pipe the upload into the write stream.
        stream.pipe(writeStream);
    });

    // Record the file metadata in the DB.
    console.log('file');
    console.log(files);
    // db.get('uploads').push(file).write()

    return files;
};

export const Mutation = {
    createTranslationAssignment: rs(TranslationAssignment, {
        before: async (findOptions, { data }, context) => {
          let err, assignment, uploads, uploadRecordsData, uploadRecords;
          
          uploads = await Promise.allSettled(
              data.initialFiles.map(storeUpload),
          );
          if (!uploads) {
            throw err;
          }

          [err, assignment] = await to(TranslationAssignment.create(data));
          if (err) {
            throw err;
          }

          uploadRecordsData = uploads.map((file) => ({
            fileName: `${file._settledValueField.id}-${file._settledValueField.filename}`,
            translationAssignmentId: assignment.id,
            documentType: 'INITIAL'
          }));
          [err, uploadRecords] = await to(TranslationAssignmentFile.bulkCreate(uploadRecordsData));
          if (err) {
            throw err;
          }

          return true;
        },
        after: () => {
          return true;
        }
    }),
};