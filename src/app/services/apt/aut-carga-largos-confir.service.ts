import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutCargaLargosConfirService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl + 'ejec-prog-cargas-largos-confirma';
  }

  confirm(data: any) : Observable<any>{
    return this.http.post<any>(this.url, data);
  }
}
