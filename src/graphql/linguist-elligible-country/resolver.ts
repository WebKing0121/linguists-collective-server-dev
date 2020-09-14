import { Query } from './linguist-elligible-country.query';
import { LinguistElligibleCountryMap } from "./linguist-elligible-country.map";
import { Mutation } from "./linguist-elligible-country.mutation";

export const resolver = {
  Query: Query,
  LinguistElligibleCountry: LinguistElligibleCountryMap,
  Mutation: Mutation,
};
