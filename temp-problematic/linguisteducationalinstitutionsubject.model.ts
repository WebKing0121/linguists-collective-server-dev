import { Table, Column, Model, HasMany, BeforeSave, ForeignKey, BelongsTo, AllowNull } from 'sequelize-typescript';
import { ENV } from '../config';
import { Linguist, LinguistEducationalInstitution } from './linguist.model';
import { LinguistEducationalInstitution } from './linguisteducationalinstitution.model';

@Table({ timestamps: false })
export class LinguistEducationalInstitutionSubject extends Model<LinguistEducationalInstitutionSubject> {

  @ForeignKey(() => LinguistEducationalInstitution)
  @Column
  linguistEducationalInstitutionId: number;

  @BelongsTo(() => LinguistEducationalInstitution)
  linguistEducationalInstitution: LinguistEducationalInstitution;

  @AllowNull(false)
  @Column
  name: string;
  
}
