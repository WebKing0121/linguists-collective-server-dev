import { resolver as rs } from 'graphql-sequelize';
import { TranslationAssignment, TranslationAssignmentFile } from '../../models';
import to from 'await-to-js';
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'assets/uploads');
  },
  filename: function (req, file, cb) {
      // You could rename the file name
      // cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
      console.log('file', file);
      // You could use the original name
      cb(null, file.originalname);
  }
});

const upload = multer({ dest: './public/data/uploads/' });

var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var path = require('path');
var sanitize = require("sanitize-filename");

export const Mutation = {
    createTranslationAssignment: rs(TranslationAssignment, {
        before: async (findOptions, { data }, context) => {
          let err, assignment, fileNames, files;
    
          [err, assignment] = await to(TranslationAssignment.create(data));
          if (err) { throw err;}

          context.upload();

          // Things I've tried
          const upload2 = multer({storage: storage}).single(data.initialFiles[0]);
          
          const upload_dir= 'public/data/uploads';
          
          const fd = new FormData();
          fd.append('initialFiles', data.initialFiles[0]);
          const fstream = fs.createWriteStream(upload_dir + data.initialFiles[0].name);
          data.initialFiles[0].pipe(fstream);
            fstream.on('close', function () {    
                console.log("Upload Finished of " + data.initialFiles[0].name);
            });
          /*
          Promise.resolve(data.initialFiles)
            .each(function(file_incoming, idx) {
                console.log("  Writing POSTed data :", file_incoming.name);
                var sanitized_filename = sanitize(file_incoming.name);
                var file_to_save = path.join(upload_dir, sanitized_filename);
                
                return fs
                  .writeFileAsync(file_to_save, file_incoming.buffer);    
            })
            // .catch() code not included for clarity : Clearly you'll need to do some error checking...
            .then( _ => {
              console.log("Added files : Success");
            });
            */

          fileNames = data.initialFilesNames.map((file) => {
            return {
              fileName: `${assignment.id}__${file}`,
              translationAssignmentId: assignment.id,
              documentType: 0
            };
          });
          [err, files] = await to(TranslationAssignmentFile.bulkCreate(fileNames));
          if (err) { throw err;}

          // console.log(data.initialFiles);

          return true;
        },
        after: () => {
          return true;
        }
    }),
};