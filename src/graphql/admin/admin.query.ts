import { resolver } from 'graphql-sequelize';
import { Admin } from '../../models';

export const Query = {
    getAdmin: resolver(Admin),
};