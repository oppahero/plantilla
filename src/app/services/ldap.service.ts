import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models';

@Injectable({
  providedIn: 'root'
})
export class LdapService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.apiUrlLDAP + 'ldap/login';
  }

  login(data: any): Observable<Response> {
    return this.http.post<Response>(this.url, data);
  }

}
