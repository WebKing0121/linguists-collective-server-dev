import { Table, Column, Model, ForeignKey, BelongsTo, AllowNull } from 'sequelize-typescript';
import { ENV } from '../config';
import { QuoteRequest } from './quoterequest.model';

@Table({timestamps: false})
export class QuoteRequestFile extends Model<QuoteRequestFile> {

  @Column({primaryKey: true, autoIncrement: true})
  id: number;

  @ForeignKey(() => QuoteRequest)
  @Column
  quoteRequestId: number;

  @BelongsTo(() => QuoteRequest)
  quoteRequest: QuoteRequest;

  @AllowNull(false)
  @Column
  fileName: string;
  
}
