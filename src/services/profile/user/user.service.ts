import {tap, catchError} from 'rxjs/operators';
import {AxiosResponse} from 'axios';
import {Observable, of} from 'rxjs';
import {createUserDto} from './dto/createUser.dto';
import {createTransferDto} from './dto/createTransfer.dto';

import {
  Injectable,
  Inject,
  HttpStatus,
  HttpService,
  HttpException,
  forwardRef
} from '@nestjs/common';
import {User} from './interface/user.interface';
import * as request from 'request-promise';
import {TransferMethod} from './interface/transfer.interface';
import {Payment} from './interface/pago.interface';
import {createPaymentdto} from './dto/createPayment.dto';

const apiUrl = 'https://api.sandbox.hyperwallet.com/rest/v3/users';

const apiUrl3 = 'https://api.sandbox.hyperwallet.com/rest/v3/payments'
const config = {
  headers: {
    "Content-Type": 'application/json',
    "Accept": 'application/json',
    "Access-Control-Allow-Headers": "Content-Type"

  },
  auth: {
    'username': 'restapiuser@16918821618',
    'password': 'ydsRK9grZi9M'
  }
}
@Injectable()
export class UserService {
  constructor(private readonly http : HttpService) {}
  private handleError < T > (operation = 'operation', result?: T) {
    return(error : any): Observable < T > => {
      console.error(error);
      return of(result as T);
    };
  }
  registrar(createuserDto : createUserDto) : Observable < AxiosResponse < User >> {

    return this.http.post < User > (apiUrl, createuserDto, config)
    /*const requestOptions = {
    method: 'POST',
    url: 'https://api.sandbox.hyperwallet.com/rest/v3/users',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type'
    },
    auth: {
      'user': 'restapiuser@16918821618',
      'pass': 'ydsRK9grZi9M'
    },
    body:createuserDto,
    json: true
  };
  try {
    const data= await  request(requestOptions);
    return data;
  } catch (e) {
    throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}*/

  }

  listarUsuarios() : Observable < AxiosResponse < any[] >> {
    const url=`${apiUrl}?offset=0&limit=100&sortBy=-createdOn`;
    return this.http.get < any[] > (url, config)
  }
  listarCuentasBanco(usertoken : string) : Observable < AxiosResponse < any[] >> {
    const url = `${apiUrl}/${usertoken}/bank-accounts`;
    return this
      .http
      .get(url, config)
  }

  registrarMetodoPago(createtransferDto : createTransferDto, usertoken : string) : Observable < AxiosResponse < TransferMethod >> {
    const url = `${apiUrl}/${usertoken}/bank-accounts`;
    let createTransfer = createtransferDto;
    createTransfer.transferMethodCountry = 'US';
    createTransfer.transferMethodCurrency = 'USD';
    createTransfer.type = 'BANK_ACCOUNT';
    createTransfer.branchId = createtransferDto.branchId;
    createTransfer.bankAccountPurpose = createtransferDto.bankAccountPurpose;
    createTransfer.bankAccountId = createtransferDto.bankAccountId;
    //console.log(createTransfer)
    return this.http.post < TransferMethod > (url, createTransfer, config)
  }

  listarMetodoPagoDeUnusuario(usertoken : string, tokenid : string) : Observable < any > {
    const url = `${apiUrl}/${usertoken}/bank-accounts/${tokenid}`;
    return this.http.get < TransferMethod > (url, config).pipe(tap(_ => console.log(`pago obtenido id=${tokenid}`))
    //,catchError(this.handleError < TransferMethod > (`pago id=${tokenid}`))
    );
  }

  emitirPago(createpaymentdto : createPaymentdto) : Observable < AxiosResponse < Payment >> {
    return this.http.post < Payment > (apiUrl3, createpaymentdto, config)
  }
}