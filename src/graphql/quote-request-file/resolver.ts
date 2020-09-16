import { Query } from './quote-request-file.query';
import { QuoteRequestFileMap } from "./quote-request-file.map";
import { Mutation } from "./quote-request-file.mutation";

export const resolver = {
  Query: Query,
  QuoteRequestFile: QuoteRequestFileMap,
  Mutation: Mutation,
};
