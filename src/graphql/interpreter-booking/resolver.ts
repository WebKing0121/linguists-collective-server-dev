import { GraphQLDateTime } from 'graphql-iso-date';
import { Query } from './interpreter-booking.query';
import { InterpreterBookingMap } from "./interpreter-booking.map";
import { Mutation } from "./interpreter-booking.mutation";

export const resolver = {
  Query: Query,
  InterpreterBooking: InterpreterBookingMap,
  Mutation: Mutation,
  DateTime: GraphQLDateTime
};
