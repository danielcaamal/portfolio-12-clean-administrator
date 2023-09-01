import { User } from '../../models';
import { IGenericRepository } from '../generic.repository';

export abstract class IUserRepository extends IGenericRepository<User> {
  abstract findByEmail(email: string): Promise<User>;
}
