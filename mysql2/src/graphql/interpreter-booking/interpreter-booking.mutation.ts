import { resolver as rs } from 'graphql-sequelize';
import { InterpreterBooking } from '../../models';
import to from 'await-to-js';


export const Mutation = {
    createInterpreterBooking: rs(InterpreterBooking, {
        before: async (findOptions, { data }) => {
          let err, assignment;
    
          [err, assignment] = await to(InterpreterBooking.create(data));
          if (err) { throw err;}

          return true;
        },
        after: () => {
          return true;
        }
    }),
};