import { Query } from './linguist.query';
import { LinguistMap } from "./linguist.map";
import { Mutation } from "./linguist.mutation";

export const resolver = {
  Query: Query,
  Linguist: LinguistMap,
  Mutation: Mutation,
};
