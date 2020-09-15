import { GraphQLDateTime } from 'graphql-iso-date';
import { Query } from './linguist-educational-institution.query';
import { LinguistEducationalInstitutionMap } from "./linguist-educational-institution.map";
import { Mutation } from "./linguist-educational-institution.mutation";

export const resolver = {
  Query: Query,
  LinguistEducationalInstitution: LinguistEducationalInstitutionMap,
  Mutation: Mutation,
  DateTime: GraphQLDateTime
};
