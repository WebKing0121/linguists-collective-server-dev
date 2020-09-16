import { Table, Column, Model, HasMany, BeforeSave, ForeignKey, BelongsTo, AllowNull } from 'sequelize-typescript';
import { ENV } from '../config';
import { InterpreterBookingFile } from './interpreterbookingfile.model';
import { User } from './user.model';

@Table({timestamps: false})
export class InterpreterBooking extends Model<InterpreterBooking> {

  @Column({primaryKey: true, autoIncrement: true})
  id: number;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @AllowNull(false)
  @Column
  interpretingService: String;

  @AllowNull(false)
  @Column
  startDate: Date;

  @AllowNull(false)
  @Column
  startTime: String;

  @AllowNull(false)
  @Column
  endDate: Date;

  @AllowNull(false)
  @Column
  endTime: String;

  @AllowNull(false)
  @Column
  sourceLanguage: String;

  @AllowNull(false)
  @Column
  targetLanguage: String;

  @AllowNull(false)
  @Column
  requiredInterpretingTypes: String;

  @AllowNull(false)
  @Column
  jobDescription: String;

  @AllowNull(false)
  @Column
  expertiseLevel: String;

  @AllowNull(false)
  @Column
  securityClearanceLevelRequired: String;

  @Column
  remotePlatform: String;
  
  @Column
  remotePhoneNumber: String;
  
  @Column
  venueAddress: String;
  
  @Column
  venuePostcode: String;
  
  @Column
  preferredInterpreterId: Number;
  
  @Column
  preferredGender: String;
  
  @Column
  carParkingAvailable: String;
  
  @Column
  additionalInformation: String;
  
  @HasMany(() => InterpreterBookingFile)
  interpreterBookingFiles: [InterpreterBookingFile];
}
