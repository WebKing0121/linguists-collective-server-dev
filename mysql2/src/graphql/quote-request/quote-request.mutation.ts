import { resolver as rs } from 'graphql-sequelize';
import { QuoteRequest } from '../../models';
import to from 'await-to-js';


export const Mutation = {
    createQuoteRequest: rs(QuoteRequest, {
        before: async (findOptions, { data }) => {
          let err, assignment;
    
          [err, assignment] = await to(QuoteRequest.create(data));
          if (err) { throw err;}

          return true;
        },
        after: () => {
          return true;
        }
    }),
};