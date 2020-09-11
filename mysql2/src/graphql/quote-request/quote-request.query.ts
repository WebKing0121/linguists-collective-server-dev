import { resolver } from 'graphql-sequelize';
import { QuoteRequest } from '../../models';
import to from 'await-to-js';

export const Query = {
    getQuoteRequest: resolver(QuoteRequest),
    getQuoteRequests: resolver(QuoteRequest, {
        before: async (findOptions) => {
            return findOptions;
        },
        after: (quoteRequest) => {
            return quoteRequest;
        }
    }),
};