// External
import { Model } from 'mongoose';

// Domain
import { IGenericRepository } from 'src/domain';

export class MongoGenericRepository<T> implements IGenericRepository<T> {
  private _repository: Model<T>;
  private _populateOnFind: string[];

  constructor(repository: Model<T>, populateOnFind: string[] = []) {
    this._repository = repository;
    this._populateOnFind = populateOnFind;
  }
  async findAll(): Promise<T[]> {
    return await this._repository
      .find({})
      .populate(this._populateOnFind)
      .exec();
  }
  async find(id: string): Promise<T> {
    return (await this._repository
      .findById(id)
      .populate(this._populateOnFind)
      .exec()) as T;
  }
  async create(item: T): Promise<T> {
    return await this._repository.create(item);
  }
  async update(id: string, item: Partial<T>) {
    return await this._repository.findByIdAndUpdate(id, item).exec();
  }
}
