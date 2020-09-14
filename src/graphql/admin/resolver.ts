import { Query } from './admin.query';
import { AdminMap } from "./admin.map";
import { Mutation } from "./admin.mutation";

export const resolver = {
  Query: Query,
  Admin: AdminMap,
  Mutation: Mutation,
};
