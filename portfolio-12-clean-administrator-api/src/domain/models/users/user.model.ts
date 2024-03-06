import { USER_STATUS_ENUM } from 'src/domain/enums';
import { Base } from '../base/base.model';

export class User extends Base {
  static modelName = 'user';
  _id?: string;
  firstName: string;
  lastName: string;
  employeeNumber: number;
  email: string;
  password: string;
  position: string;
  token?: string;
  lastConnection?: Date;
  status: USER_STATUS_ENUM;
  loginCodeVerification?: string;
  loginCodeExpiration?: Date;
}
