import { AxiosResponse } from 'axios';
import { Observable, of } from 'rxjs';
import { createUserDto } from './dto/createUser.dto';
import {
  Injectable,
  Inject,
  HttpStatus,
  HttpService,
  HttpException,
  forwardRef
} from '@nestjs/common';
import { User } from './interface/user.interface';
import * as request from 'request-promise';
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
const apiUrl='https://api.sandbox.hyperwallet.com/rest/v3/users';

@Injectable()
export class UserService {
  constructor(private readonly http: HttpService) { }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
  register(createuserDto: createUserDto): Observable<AxiosResponse<User>> {
   

    return this.http.post<User>(apiUrl,
        createuserDto, config)
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

  listar ():Observable<AxiosResponse<User[]>>{
    return this.http.get < User[] > (apiUrl, config)
    
  }
}