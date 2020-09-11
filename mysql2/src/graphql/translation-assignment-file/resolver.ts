import { Query } from './translation-assignment-file.query';
import { TranslationAssignmentFileMap } from "./translation-assignment-file.map";
import { Mutation } from "./translation-assignment-file.mutation";

export const resolver = {
  Query: Query,
  TranslationAssignmentFile: TranslationAssignmentFileMap,
  Mutation: Mutation,
};
