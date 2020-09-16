import { Query } from './translation-assignment.query';
import { TranslationAssignmentMap } from "./translation-assignment.map";
import { Mutation } from "./translation-assignment.mutation";

export const resolver = {
  Query: Query,
  TranslationAssignment: TranslationAssignmentMap,
  Mutation: Mutation
};
