import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url: string

  constructor(private http: HttpClient) {
    this.url = environment.apiUrlPermanencia + 'permanencias'
  }

  /* Obtener cedula dado el siglado */
  getCiBySir(datos: any): Observable<[]> {
    const url = `${this.url}/cedula`
    return this.http.post<any>(url, datos)
  }
}
