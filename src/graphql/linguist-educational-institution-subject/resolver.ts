import { Query } from './linguist-educational-institution-subject.query';
import { LinguistEducationalInstitutionSubjectMap } from "./linguist-educational-institution-subject.map";
import { Mutation } from "./linguist-educational-institution-subject.mutation";

export const resolver = {
  Query: Query,
  LinguistEducationalInstitutionSubject: LinguistEducationalInstitutionSubjectMap,
  Mutation: Mutation,
};
