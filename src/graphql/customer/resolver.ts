import { Query } from './customer.query';
import { CustomerMap } from "./customer.map";
import { Mutation } from "./customer.mutation";

export const resolver = {
  Query: Query,
  Customer: CustomerMap,
  Mutation: Mutation,
};
