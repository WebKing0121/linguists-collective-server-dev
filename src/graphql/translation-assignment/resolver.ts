import { Query } from './translation-assignment.query';
import { TranslationAssignmentMap } from "./translation-assignment.map";
import { Mutation } from "./translation-assignment.mutation";
import { GraphQLUpload } from 'apollo-server-express';

export const resolver = {
  Query: Query,
  TranslationAssignment: TranslationAssignmentMap,
  Mutation: Mutation,
  Upload: GraphQLUpload
};
