import { Table, Column, Model, HasMany, BeforeSave, ForeignKey, BelongsTo, AllowNull } from 'sequelize-typescript';
import { ENV } from '../config';
import { User } from './user.model';

@Table({timestamps: false})
export class Customer extends Model<Customer> {

  @Column({primaryKey: true, autoIncrement: true})
  id: number;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;
  
  @AllowNull(false)
  @Column
  phone: string;

  @AllowNull(false)
  @Column
  address: string;

  @AllowNull(false)
  @Column
  postcode: string;

  @AllowNull(false)
  @Column
  businessName: string;

  @Column
  position: string;

  @Column
  businessContactAddress: string;

  @Column
  businessContactPostcode: string;

  @Column
  registrationNumber: string;

  @Column
  businessWebsite: string;

  @Column
  businessEmail: string;

  @Column
  additionalInfo: string;
  
}
