import { User } from 'src/domain/models';
import { IGenericRepository } from '../generic.repository';

export abstract class IDataServices {
  abstract users: IGenericRepository<User>;
}
