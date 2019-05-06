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
  Req,
  Param
} from '@nestjs/common';

import { UserService } from './user.service';   
import { createTransferDto } from './dto/createTransfer.dto';
import { createPaymentdto } from './dto/createPayment.dto';

@Controller('users')
export class UserController {
  constructor(private readonly _userService: UserService) { }

  @Post('')
  registrar(@Response() res, @Body() createuserDto: createUserDto) {

    return this
      ._userService
      .registrar(createuserDto)
      .subscribe(response => {
        res.send({usuario:response.data,
          cod:1
        })
      }, (err) => {
        res.send({
          data: err.response.data,
          mensaje: "Error en la petición",
          cod:0
        })
      })
  }
  @Get('')
  listarUsuarios(@Response() res) {
    return this
      ._userService
      .listarUsuarios()
      .subscribe(response => {
        res.send(response.data)
      }, (err) => {
        res.send({
          data: err.response.data,
          mensaje: "Error en la petición"
        })
      })
  }

  @Get('/cuentas/:usertoken')
  listarCuentasBanco(@Response() res, @Param() param) {
    return this
      ._userService
      .listarCuentasBanco(param.usertoken)
      .subscribe(response => {
        res.send(response.data)
      }, (err) => {
        res.send({
          data: err.response.data,
          mensaje: "Error en la petición",
          cod:0
        })
      })
  }

  @Post('/registrarpago/:usertoken')
  registrarPago(@Response() res, @Body() createtransferDto: createTransferDto, @Param() param) {
    console.log(createtransferDto)
    return this
      ._userService
      .registrarMetodoPago(createtransferDto, param.usertoken)
      .subscribe(response => {
        res.send({data:response.data,cod:1})
      }, (err) => {
        console.log(err)
        res.send({
          data: err.response.data,
          mensaje: "Error en la petición",
          cod:0
        })
      })
  }
  @Get('/:usertoken/bank-accounts/:id')
  listarPago(@Response() res, @Param() param) {
    console.log(param.id)
    return this
      ._userService
      .listarMetodoPagoDeUnusuario(param.usertoken, param.id)
      .subscribe(response => {
        res.send(response.data)
      }, (err) => {
        res.send({
          data: err.response.data,
          mensaje: "Error en la petición"
        })
      })
  }

  @Post('/pagar')
  emitirPago(@Response() res, @Body() createpaymentdto: createPaymentdto) {
    return this
      ._userService
      .emitirPago(createpaymentdto)
      .subscribe(response => {
        res.send({data:response.data,cod:1})
      }, (err) => {
        res.send({
          data: err.response.data,
          mensaje: "Error en la petición",
          cod:0
        })
      })
  }
}
