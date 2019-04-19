import { Module, Global } from '@nestjs/common';

import { MapperService } from './mapper/mapper.service';
import { UserModule } from '../services/profile/user/user.module';


@Global()
@Module({
  providers: [
   
  ],
  exports:  [MapperService],
  imports: [UserModule],
})
export class SharedModule {}