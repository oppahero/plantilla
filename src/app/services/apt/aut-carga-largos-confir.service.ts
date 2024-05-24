import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutCargaLargosConfirService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost/opensipca-back/public/index.php/api/' + 'ejec-prog-cargas-largos-confirma';
  }

  confirm(data: any) : Observable<any>{
    return this.http.post<any>(this.url, data);
  }
}
