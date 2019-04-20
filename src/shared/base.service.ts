
import 'automapper-ts/dist/automapper';
/*
export abstract class BaseService<T extends Typegoose> {
  protected _model: ModelType<T>;
  protected _mapper: AutoMapperJs.AutoMapper;

  private get modelName(): string {
    return this._model.modelName;
  }

  private get viewModelName(): string {
    return `${this._model.modelName}DTO`;
  }

  async map<K>(
    object: Partial<InstanceType<T>> | Array<InstanceType<T>>,
    isArray: boolean = false,
    sourceKey?: string,
    destinationKey?: string,
  ): Promise<K> {
    const _sourceKey = isArray
      ? `${sourceKey || this.modelName}[]`
      : sourceKey || this.modelName;
    const _detinationKey = isArray
      ? `${destinationKey || this.viewModelName}[]`
      : destinationKey || this.viewModelName;
    return this._mapper.map(_sourceKey, _detinationKey, object);
  }

  async findAll(filter = {}): Promise<Array<InstanceType<T>>> {
    return this._model.find(filter).exec();
  }

  async findOne(filter = {}): Promise<InstanceType<T>> {
    return this._model.findOne(filter).exec();
  }

  async create(item: InstanceType<T>): Promise<InstanceType<T>> {
    return this._model.create(item);
  }

  async clearCollection(filter = {}): Promise<void> {
    await this._model.deleteMany(filter).exec();
  }
*/
  
