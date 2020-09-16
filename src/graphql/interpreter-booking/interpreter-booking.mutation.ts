import { resolver as rs } from 'graphql-sequelize';
import { InterpreterBooking, InterpreterBookingFile } from '../../models';
import to from 'await-to-js';
import storeUpload from '../../functions/store-upload';
const Promise = require('bluebird');


export const Mutation = {
    createInterpreterBooking: rs(InterpreterBooking, {
        before: async (findOptions, { data }) => {
          let err, booking, uploads, uploadRecordsData, uploadRecords;

          uploads = await Promise.allSettled(
            data.scriptsOrInstructions.map(storeUpload),
          );
          if (!uploads) {
            throw err;
          }
    
          [err, booking] = await to(InterpreterBooking.create(data));
          if (err) { throw err;}

          uploadRecordsData = uploads.map((file) => ({
            fileName: `${file._settledValueField.id}-${file._settledValueField.filename}`,
            interpreterBookingId: booking.id,
          }));
          [err, uploadRecords] = await to(InterpreterBookingFile.bulkCreate(uploadRecordsData));
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