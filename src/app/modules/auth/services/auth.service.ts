import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_API_URL } from 'src/app/constants';
import { LoginData, LoginResponse } from '../types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  token: string | null = null;
  isAuthorized = false;

  signup = () => {
    console.log('service sign up');
    
  }

  login = (body: LoginData) => {
    console.log('service log in');
    return this.http.post<LoginResponse>(`${BASE_API_URL}/auth/login`, body);
    
  }
}
