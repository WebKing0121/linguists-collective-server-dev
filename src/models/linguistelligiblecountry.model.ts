import { Table, Column, Model, HasMany, BeforeSave, ForeignKey, BelongsTo, AllowNull } from 'sequelize-typescript';
import { ENV } from '../config';
import { Linguist } from './linguist.model';

@Table({ timestamps: false })
export class LinguistElligibleCountry extends Model<LinguistElligibleCountry> {

  @ForeignKey(() => Linguist)
  @Column
  linguistId: number;

  @BelongsTo(() => Linguist)
  linguist: Linguist;

  @AllowNull(false)
  @Column
  name: string;
  
}
