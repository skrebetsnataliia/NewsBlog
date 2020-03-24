import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from 'src/types/user.model';
import * as env from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private  AUTH_URL = env.environment.API_AUTH_URL;
  constructor(private http: HttpClient) { }

  logIn(): Observable<IUser> {
    return this.http.get<IUser>(`${this.AUTH_URL}`);
  }
}
