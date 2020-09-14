import { Table, Column, Model, HasMany, BeforeSave, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { ENV } from '../config';
import { User } from './user.model';

@Table({timestamps: false})
export class Admin extends Model<Admin> {

  @Column({primaryKey: true, autoIncrement: true})
  id: number;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @Column
  otherName: string;
  
}
