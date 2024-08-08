import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURL = "http://localhost:8080/api/v1/userLogin";

  constructor(private httpClient: HttpClient) { }

  usersLogin(login: Login): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, login);
  }
}
