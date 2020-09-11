import { resolver } from 'graphql-sequelize';
import { InterpreterBooking } from '../../models';
import to from 'await-to-js';

export const Query = {
    getInterpreterBooking: resolver(InterpreterBooking),
    getInterpreterBookings: resolver(InterpreterBooking, {
        before: async (findOptions) => {
            return findOptions;
        },
        after: (interpreterBooking) => {
            return interpreterBooking;
        }
    }),
};