// Framework
import { Injectable } from '@nestjs/common';

// Use-cases
import { UsersUseCases } from './use-cases/users.use-cases';

// Presentation
import { UserPresenter } from './presenters';

@Injectable()
export class UsersService {
  constructor(private readonly usersUseCases: UsersUseCases) {}

  findAll = async (): Promise<UserPresenter[]> => {
    return (await this.usersUseCases.findAll()).map(
      (user) => new UserPresenter(user),
    );
  };
}
