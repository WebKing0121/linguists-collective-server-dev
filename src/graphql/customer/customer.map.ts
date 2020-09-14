import { resolver } from 'graphql-sequelize';
import { Customer } from '../../models';

export const CustomerMap = {
    user: resolver(Customer.associations.user),
};