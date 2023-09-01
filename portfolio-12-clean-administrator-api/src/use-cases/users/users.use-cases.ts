// Domain
import { User } from 'src/domain';

export abstract class IUsersUseCases {
  public abstract findAll(): Promise<User[]>;
}
