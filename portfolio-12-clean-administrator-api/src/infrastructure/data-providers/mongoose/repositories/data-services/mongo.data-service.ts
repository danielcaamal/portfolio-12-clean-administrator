import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
// Framework
import { InjectModel } from '@nestjs/mongoose';

// External
import { Model } from 'mongoose';

// Domain
import { IDataServices, User } from 'src/domain';

// Infrastructure
import { MongoGenericRepository } from '../mongo-generic.repository';
import { MongoUserRepository } from '../users';

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
  users: MongoUserRepository; // MongoGenericRepository<User>;

  constructor(
    @InjectModel(User.name)
    private readonly usersRepository: Model<User>,
  ) {}

  onApplicationBootstrap() {
    // Inject important modules as: this.users = new MongoGenericRepository<User>(this.UsersRepository);
    this.users = new MongoUserRepository(this.usersRepository);
  }
}
