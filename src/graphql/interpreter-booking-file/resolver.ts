import { Query } from './interpreter-booking-file.query';
import { InterpreterBookingFileMap } from "./interpreter-booking-file.map";
import { Mutation } from "./interpreter-booking-file.mutation";

export const resolver = {
  Query: Query,
  InterpreterBookingFile: InterpreterBookingFileMap,
  Mutation: Mutation,
};
