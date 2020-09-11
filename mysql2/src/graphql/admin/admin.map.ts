import { resolver } from 'graphql-sequelize';
import { Admin } from '../../models';

export const AdminMap = {
    user: resolver(Admin.associations.user)
};