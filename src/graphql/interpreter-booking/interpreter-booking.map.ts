import { resolver } from 'graphql-sequelize';
import { InterpreterBooking } from '../../models';

export const InterpreterBookingMap = {
    interpreterBookingFiles: resolver(InterpreterBooking.associations.interpreterBookingFiles),
    // users: resolver(Company.associations.users),
};