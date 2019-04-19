import {UserService} from './user.service';
import {UserController} from './user.controller';
import {Module, HttpModule} from '@nestjs/common';

@Module({imports: [HttpModule], 
  controllers: [UserController], 
  providers: [UserService],
   exports: [UserService]})
export class UserModule {}