import { Table, Column, Model, HasMany, BeforeSave, ForeignKey, BelongsTo, AllowNull } from 'sequelize-typescript';
import { ENV } from '../config';
import { User } from './user.model';

@Table({timestamps: false})
export class QuoteRequest extends Model<QuoteRequest> {

  @Column({primaryKey: true, autoIncrement: true})
  id: number;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @AllowNull(false)
  @Column
  requestPurpose: string;

  @AllowNull(false)
  @Column
  requestDetails: string;

  @AllowNull(false)
  @Column
  expertiseLevel: string;

  @AllowNull(false)
  @Column
  sourceLanguage: string;

  @AllowNull(false)
  @Column
  targetLanguage: string;

  @AllowNull(false)
  @Column
  turnaroundTime: Date;
  
  @Column
  otherPurpose: string;
  
  @Column
  budgetDetails: string;
  
  @Column
  preferredGender: string;
  
}
