import { Query } from './quote-request.query';
import { QuoteRequestMap } from "./quote-request.map";
import { Mutation } from "./quote-request.mutation";

export const resolver = {
  Query: Query,
  QuoteRequest: QuoteRequestMap,
  Mutation: Mutation,
};
