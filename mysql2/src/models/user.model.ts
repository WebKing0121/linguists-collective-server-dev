import { Table, Column, Model, HasMany, BelongsTo, ForeignKey, BeforeSave, AllowNull, HasOne } from 'sequelize-typescript';
import { Company } from "./company.model";
import * as bcrypt from 'bcrypt';
import to from 'await-to-js';
import * as jsonwebtoken from'jsonwebtoken';
import { ENV } from '../config';
import { Customer } from './customer.model';
import { Linguist } from './linguist.model';
import { Admin } from './admin.model';

@Table({timestamps: true})
export class User extends Model<User> {

  @Column({primaryKey: true, autoIncrement: true})
  id: number;

  @AllowNull(false)
  @Column
  firstName: string;

  @AllowNull(false)
  @Column
  lastName: string;

  @AllowNull(false)
  @Column({unique: true})
  email: string;

  @Column
  title: string;

  @Column
  password: string;
  
  @Column
  profilePhotoUrl: string;

  @Column
  userType: string;

  @HasOne(() => Customer)
  customer: Customer;

  @HasOne(() => Linguist)
  linguist: Linguist;

  @HasOne(() => Admin)
  admin: Admin;

  jwt: string;
  login: boolean;
  @BeforeSave
  static async hashPassword(user: User) {
    let err;
    if (user.changed('password')){
        let salt, hash;
        [err, salt] = await to(bcrypt.genSalt(10));
        if(err) {
          throw err;
        }

        [err, hash] = await to(bcrypt.hash(user.password, salt));
        if(err) {
          throw err;
        }
        user.password = hash;
    }
  }

  async comparePassword(pw) {
      let err, pass;
      if(!this.password) {
        throw new Error('Does not have password');
      }

      [err, pass] = await to(bcrypt.compare(pw, this.password));
      if(err) {
        throw err;
      }

      if(!pass) {
        throw 'Invalid password';
      }

      return this;
  }

  getJwt(){
      return jsonwebtoken.sign({
          id: this.id,
      }, ENV.JWT_ENCRYPTION, { expiresIn: ENV.JWT_EXPIRATION });
  }
}