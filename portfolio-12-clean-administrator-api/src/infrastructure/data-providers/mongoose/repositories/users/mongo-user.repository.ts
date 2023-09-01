// Framework
import { InjectModel } from '@nestjs/mongoose';

// External
import { Model } from 'mongoose';

// Domain
import { IUserRepository, User } from 'src/domain';

export class MongoUserRepository implements IUserRepository {
  constructor(
    @InjectModel(User.name)
    private readonly usersRepository: Model<User>,
  ) {}

  async findByEmail(email: string): Promise<User> {
    return await this.usersRepository.findOne({ email }).exec();
  }
  async findAll(): Promise<User[]> {
    return await this.usersRepository.find().exec();
  }
  async find(id: string): Promise<User> {
    return (await this.usersRepository.findById(id).exec()) as User;
  }
  async create(item: User): Promise<User> {
    return await this.usersRepository.create(item);
  }
  async update(id: string, item: Partial<User>) {
    return this.usersRepository.findByIdAndUpdate(id, item).exec();
  }
}
