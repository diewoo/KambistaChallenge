import { createUserDto } from './dto/createUser.dto';
import { User } from './interface/user.interface';
import {
  Controller,
  Post,
  HttpStatus,
  Body,
  HttpException,
  Get,
  UseGuards,
  Response,
  Req
} from '@nestjs/common';

import { UserService } from './user.service';
import { ApiException } from '../../../shared/api-exception.model';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { AxiosResponse } from 'axios';

@Controller('users')
export class UserController {
  constructor(private readonly _userService: UserService) { }

  @Post('')
  register(@Response() res, @Body() createuserDto: createUserDto) {
    return this
      ._userService
      .register(createuserDto)
      .subscribe(response => {
        res.send(response.data)
      }, (err) => {
        console.log(err)
        res.json({
          code: "1"
        })
      }
      )
  }
  @Get('')
  listar(@Response() res){
    return this
    ._userService
    .listar()
    .subscribe(response => {
      res.send(response.data)
    }, (err) => {
      console.log(err)
      res.json({
        code: "1"
      })
    }
    )
  }
}
