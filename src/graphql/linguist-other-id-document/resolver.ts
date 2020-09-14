import { Query } from './linguist-other-id-document.query';
import { LinguistOtherIdDocumentMap } from "./linguist-other-id-document.map";
import { Mutation } from "./linguist-other-id-document.mutation";

export const resolver = {
  Query: Query,
  LinguistOtherIdDocument: LinguistOtherIdDocumentMap,
  Mutation: Mutation,
};
