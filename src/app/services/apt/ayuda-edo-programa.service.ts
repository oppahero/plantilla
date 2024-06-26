import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class AyudaEdoProgramaService {
  private url: string

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl + 'edoProgramas'
  }

  getAll(data: any): Observable<any> {
    return this.http.post<any[]>(this.url, data)
  }
}
