import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL=environment. apiUrl;
  constructor( private httpClient:HttpClient) { }
  signUp(data:any){
    return this.httpClient.post(`${this.url}/signup`, data);
  }
}
