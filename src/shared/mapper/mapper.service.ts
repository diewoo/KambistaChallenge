import 'automapper-ts/dist/automapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MapperService {
  mapper: AutoMapperJs.AutoMapper;
  constructor() {
    this.mapper = automapper;
    this.initializeMapper();
  }

  private initializeMapper(): void {
    this.mapper.initialize(MapperService.configure);
  }

  private static configure(config: AutoMapperJs.IConfiguration): void {
    config
      .createMap('User', 'UserDTO')
      .forMember('__v', opts => opts.ignore())
      .forSourceMember('_id', opts => opts.ignore())
      .forSourceMember('password', opts => opts.ignore());
    config
      .createMap('Location', 'LocationDTO')
      .forMember('__v', opts => opts.ignore())
      .forSourceMember('_id', opts => opts.ignore());
  }
}