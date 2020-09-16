import { Table, Column, Model, HasMany, BeforeSave, ForeignKey, BelongsTo, AllowNull } from 'sequelize-typescript';
import { ENV } from '../config';
import { Linguist } from './linguist.model';
import { LinguistEducationalInstitutionSubject } from './linguisteducationalinstitutionsubject.model';

@Table({ timestamps: false })
export class LinguistEducationalInstitution extends Model<LinguistEducationalInstitution> {

  @ForeignKey(() => Linguist)
  @Column
  linguistId: number;

  @BelongsTo(() => Linguist)
  linguist: Linguist;

  @HasMany(() => LinguistEducationalInstitutionSubject)
  subjectsStudied: LinguistEducationalInstitutionSubject[];

  @AllowNull(false)
  @Column
  name: string;

  @Column
  graduationDate: Date;

  @Column
  qualificationName: string;

  // -> relevantQualificationDocument

}
