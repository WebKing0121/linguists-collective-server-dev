import { GraphQLDateTime } from 'graphql-iso-date';
import { Query } from './linguist-work-experience-role.query';
import { LinguistWorkExperienceRoleMap } from "./linguist-work-experience-role.map";
import { Mutation } from "./linguist-work-experience-role.mutation";

export const resolver = {
  Query: Query,
  LinguistWorkExperienceRole: LinguistWorkExperienceRoleMap,
  Mutation: Mutation,
  DateTime: GraphQLDateTime
};
