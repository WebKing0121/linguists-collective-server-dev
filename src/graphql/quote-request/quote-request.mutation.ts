import { resolver as rs } from 'graphql-sequelize';
import { QuoteRequest, QuoteRequestFile } from '../../models';
import to from 'await-to-js';
import storeUpload from '../../functions/store-upload';
const Promise = require('bluebird');


export const Mutation = {
    createQuoteRequest: rs(QuoteRequest, {
        before: async (findOptions, { data }) => {
          let err, request, uploads, uploadRecordsData, uploadRecords;

          uploads = await Promise.allSettled(
            data.initialFiles.map(storeUpload),
          );
          if (!uploads) {
            throw err;
          }
    
          [err, request] = await to(QuoteRequest.create(data));
          if (err) { throw err;}

          uploadRecordsData = uploads.map((file) => ({
            fileName: `${file._settledValueField.id}-${file._settledValueField.filename}`,
            quoteRequestId: request.id,
          }));
          [err, uploadRecords] = await to(QuoteRequestFile.bulkCreate(uploadRecordsData));
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