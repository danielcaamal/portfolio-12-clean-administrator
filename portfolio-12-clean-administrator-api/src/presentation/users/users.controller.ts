// Framework
import { Controller, Get } from '@nestjs/common';

// Domain
import { User } from 'src/domain';

// Infrastructure
import { ControllerSwagger, ServiceSwagger } from 'src/infrastructure';

// Presentation
import { UsersService } from './users.service';
import { UserPresenter } from './presenters';

@Controller(User.name.toLowerCase())
@ControllerSwagger(User.name)
export class UsersController {
  constructor(private readonly usersService: UsersService) {
    //
  }

  @Get('')
  @ServiceSwagger([UserPresenter], {
    description: 'Find all users',
    summary: 'Find all users',
  })
  async findAllUsers(): Promise<UserPresenter[]> {
    const users = await this.usersService.findAll();
    return users;
  }
}
