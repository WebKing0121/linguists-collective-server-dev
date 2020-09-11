import { Table, Column, Model, HasMany, BeforeSave, ForeignKey, BelongsTo, AllowNull } from 'sequelize-typescript';
import { ENV } from '../config';
import { User } from './user.model';
import { TranslationAssignmentFile } from './translationassignmentfile.model';

@Table({timestamps: false})
export class TranslationAssignment extends Model<TranslationAssignment> {

  @Column({primaryKey: true, autoIncrement: true})
  id: number;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => TranslationAssignmentFile)
  translationAssignmentFiles: TranslationAssignmentFile;
  
  @AllowNull(false)
  @Column
  documentType: string;

  @AllowNull(false)
  @Column
  sourceLanguage: string;

  @AllowNull(false)
  @Column
  targetLanguage: string;

  @AllowNull(false)
  @Column
  expertiseLevel: string;

  @AllowNull(false)
  @Column
  wordCount: number;

  @AllowNull(false)
  @Column
  formattingRequired: string;

  @AllowNull(false)
  @Column
  qualifiedTranslatorRequired: string;

  @AllowNull(false)
  @Column
  postCertificate: string;

  @AllowNull(false)
  @Column
  additionalQARequired: string;

  @Column
  additionalNote: string;
  
}
