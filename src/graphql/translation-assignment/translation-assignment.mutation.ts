import { resolver as rs } from 'graphql-sequelize';
import {
  TranslationAssignment, TranslationAssignmentFile
} from '../../models';
import to from 'await-to-js';
import storeUpload from '../../functions/store-upload';
const Promise = require('bluebird');

export const Mutation = {
  createTranslationAssignment: rs(TranslationAssignment, {
    before: async (findOptions, { data }) => {
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