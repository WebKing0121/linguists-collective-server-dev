import { Table, Column, Model, HasMany, BeforeSave, ForeignKey, BelongsTo, AllowNull } from 'sequelize-typescript';
import { ENV } from '../config';
import { User } from './user.model';
import { TranslationAssignment } from './translationassignment.model';

enum TranslationAssignmentFileType {
  INITIAL,
  DELIVERY
}

@Table({timestamps: false})
export class TranslationAssignmentFile extends Model<TranslationAssignmentFile> {

  @Column({primaryKey: true, autoIncrement: true})
  id: number;

  @ForeignKey(() => TranslationAssignment)
  @Column
  translationAssignmentId: number;

  @BelongsTo(() => TranslationAssignment)
  translationAssignment: TranslationAssignment;
  
  @AllowNull(false)
  @Column
  documentType: TranslationAssignmentFileType;

  @AllowNull(false)
  @Column
  fileName: string;

  @Column
  deliveryId: number;
  
}
