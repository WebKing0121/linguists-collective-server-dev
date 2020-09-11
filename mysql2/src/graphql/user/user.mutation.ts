import { resolver as rs } from 'graphql-sequelize';
import { User, Customer, Linguist, Admin } from '../../models';
import to from 'await-to-js';

export const Mutation = {
  createUser: rs(User, {
    before: async (findOptions, { data }) => {
      let err, user, details;

      [err, user] = await to(User.create(data));
      if (err) { throw err;}

      data['userId'] = user.id;

      async function createDetails(data) {
        if (data.userType === 'admin') {
          return await to(Admin.create(data));
        }
        else if (data.userType === 'linguist') {
          return await to(Linguist.create(data));
        }
        else if (data.userType === 'customer') {
          return await to(Customer.create(data));
        }
      }
      [err, details] = await createDetails(data);
      if (err) { throw err;}

      findOptions.where = { id:user.id };
      return findOptions;
    },
    after: (user) => {
      user.login = true;
      return user;
    }
  }),
};