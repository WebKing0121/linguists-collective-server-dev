import { Query } from './linguist-service.query';
import { LinguistServiceMap } from "./linguist-service.map";
import { Mutation } from "./linguist-service.mutation";

export const resolver = {
  Query: Query,
  LinguistService: LinguistServiceMap,
  Mutation: Mutation,
};
