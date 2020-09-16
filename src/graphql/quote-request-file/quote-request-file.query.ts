import { resolver } from 'graphql-sequelize';
import { QuoteRequestFile } from '../../models';
import to from 'await-to-js';

export const Query = {
    getQuoteRequestFile: resolver(QuoteRequestFile),
    getQuoteRequestFiles: resolver(QuoteRequestFile, {
        before: async (findOptions) => {
            return findOptions;
        },
        after: (QuoteRequestFile) => {
            return QuoteRequestFile;
        }
    }),
};