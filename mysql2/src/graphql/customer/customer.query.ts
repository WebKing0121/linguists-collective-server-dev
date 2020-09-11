import { resolver } from 'graphql-sequelize';
import { Customer } from '../../models';

export const Query = {
    getCustomer: resolver(Customer),
};