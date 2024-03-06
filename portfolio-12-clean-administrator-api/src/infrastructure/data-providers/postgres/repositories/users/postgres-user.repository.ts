// Framework
import { InjectRepository } from '@nestjs/typeorm';

// External
import { Repository } from 'typeorm';

// Domain
import { IUserRepository, USER_STATUS_ENUM, User } from 'src/domain';
import { PostgresUser } from '../../models';

export class PostgresUserRepository implements IUserRepository {
  constructor(
    @InjectRepository(PostgresUser)
    private readonly usersRepository: Repository<User>,
  ) {}

  async findByEmail(email: string): Promise<User> {
    return await this.usersRepository.findOneBy({ email });
  }
  async findAll(): Promise<User[]> {
    return await this.usersRepository.findBy({
      status: USER_STATUS_ENUM.ACTIVE,
    });
  }
  async find(id: string): Promise<User> {
    return await this.usersRepository.findOneBy({ _id: id });
  }
  async create(item: User): Promise<User> {
    return this.usersRepository.save(item);
  }
  async update(id: string, item: Partial<User>) {
    return await this.usersRepository
      .update(id, item)
      .then(() => this.find(id));
  }
}
