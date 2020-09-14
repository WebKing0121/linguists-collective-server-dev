import { resolver as rs } from 'graphql-sequelize';
import { Customer, User } from '../../models';
import to from 'await-to-js';
import { NOW } from 'sequelize';


export const Mutation = {
  updateCustomer: rs(Customer, {
    before: async (findOptions, { data }) => {
      let err, customer, user;

      [err, customer] = await to(Customer.update(data, { where: { id: data.customerId } }));
      if (err) { throw err;}
      [err, user] = await to(User.update({updatedAt: NOW}, { where: { id: data.userId } }));
      if (err) { throw err;}
      
      return true;
    },
    after: () => {
      return true;
    }
  }),
};