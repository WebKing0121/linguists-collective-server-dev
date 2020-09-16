import { resolver } from 'graphql-sequelize';
import { QuoteRequest } from '../../models';

export const QuoteRequestMap = {
    quoteRequestFiles: resolver(QuoteRequest.associations.quoteRequestFiles),
    // users: resolver(Company.associations.users),
};