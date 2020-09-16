import { resolver } from 'graphql-sequelize';
import { InterpreterBookingFile } from '../../models';
import to from 'await-to-js';

export const Query = {
    getInterpreterBookingFile: resolver(InterpreterBookingFile),
    getInterpreterBookingFiles: resolver(InterpreterBookingFile, {
        before: async (findOptions) => {
            return findOptions;
        },
        after: (InterpreterBookingFile) => {
            return InterpreterBookingFile;
        }
    }),
};