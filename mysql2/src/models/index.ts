import { Sequelize } from 'sequelize-typescript';
import { ENV } from '../config/env.config';

export const sequelize = new Sequelize({
        host: ENV.DB_HOST,
        database: ENV.DB_NAME,
        port: +ENV.DB_PORT,
        dialect: ENV.DB_DIALECT,
        username: ENV.DB_USER,
        password: ENV.DB_PASSWORD,
        operatorsAliases: false,
        logging: false,
        storage: ':memory:',
        modelPaths: [__dirname + '/*.model.ts'],
        modelMatch: (filename, member) => {
           return filename.substring(0, filename.indexOf('.model')) === member.toLowerCase();
        },
});
export { User } from './user.model';
export { Customer } from './customer.model';
export { Company } from './company.model';
export { Linguist } from './linguist.model';
export { Admin } from './admin.model';
export { TranslationAssignment } from './translationassignment.model';
export { TranslationAssignmentFile } from './translationassignmentfile.model';
export { QuoteRequest } from './quoterequest.model';
export { InterpreterBooking } from './interpreterbooking.model';

