import { resolver } from 'graphql-sequelize';
import { QuoteRequestFile } from '../../models';

export const QuoteRequestFileMap = {
    quoteRequest: resolver(QuoteRequestFile.associations.quoteRequest),
};