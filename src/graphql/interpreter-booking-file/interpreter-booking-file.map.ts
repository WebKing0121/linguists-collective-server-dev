import { resolver } from 'graphql-sequelize';
import { InterpreterBookingFile } from '../../models';

export const InterpreterBookingFileMap = {
    interpreterBooking: resolver(InterpreterBookingFile.associations.interpreterBooking),
};