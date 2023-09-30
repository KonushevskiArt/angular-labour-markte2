import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_API_URL } from 'src/app/constants';
import { LoginData, LoginResponse, SignUpData, SignUpResponse } from '../types';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loginSource = new Subject<boolean>();
  userNameSource = new Subject<string>();

  loginObserve$ = this.loginSource.asObservable();
  userNameObserve$ = this.userNameSource.asObservable();

  token: LoginResponse | null = null;
  isLoggedIn = false;
  userName = ''

  // changeIsLoggedIn = (value: boolean) => {
  //   this.isLoggedIn = value;
  //   this.loginSource.next(value);
  // }

  // changeUserName = (value: string) => {
  //   this.userName = value;
  //   this.userNameSource.next(value);
  // }

  signupHTTP = (body: SignUpData) => {
    console.log('service sign up');
    return this.http.post<SignUpResponse>(`${BASE_API_URL}/auth/signup`, body);
  }

  login = (data: LoginResponse, userName: string) => {
    this.token = data;
    this.loginSource.next(true);
    this.userNameSource.next(userName);
    this.isLoggedIn = true;
    this.userName = userName;
  }

  loginHTTP = (body: LoginData) => {
    return this.http.post<LoginResponse>(`${BASE_API_URL}/auth/login`, body);
  }
  
  logout = () => {
    this.loginSource.next(false);
    this.userNameSource.next('');
    this.token = null;
  }
}
