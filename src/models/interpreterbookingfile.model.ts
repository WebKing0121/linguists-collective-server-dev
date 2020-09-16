import { Table, Column, Model, ForeignKey, BelongsTo, AllowNull } from 'sequelize-typescript';
import { ENV } from '../config';
import { InterpreterBooking } from './interpreterbooking.model';

@Table({timestamps: false})
export class InterpreterBookingFile extends Model<InterpreterBookingFile> {

  @Column({primaryKey: true, autoIncrement: true})
  id: number;

  @ForeignKey(() => InterpreterBooking)
  @Column
  interpreterBookingId: number;

  @BelongsTo(() => InterpreterBooking)
  interpreterBooking: InterpreterBooking;

  @AllowNull(false)
  @Column
  fileName: string;
  
}
