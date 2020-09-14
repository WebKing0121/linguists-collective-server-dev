import { Table, Column, Model, HasMany, BeforeSave, ForeignKey, BelongsTo, AllowNull } from 'sequelize-typescript';
import { ENV } from '../config';
import { Linguist } from './linguist.model';

@Table({ timestamps: false })
export class LinguistWorkExperienceRole extends Model<LinguistWorkExperienceRole> {

  @ForeignKey(() => Linguist)
  @Column
  linguistId: number;

  @BelongsTo(() => Linguist)
  linguist: Linguist;

  @AllowNull(false)
  @Column
  organisationName: string;

  @Column
  addressOrContact: string;

  @Column
  startDate: string;

  @Column
  leavingDate: string;

  @Column
  dutiesExperienceGained: String;

  @Column
  referenceName: String;

  @Column
  referenceContact: String;
  
}
