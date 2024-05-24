// import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { GlobalService } from '..';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutCargaLargosDetService {
  private url: string;

  constructor(private http: HttpClient, private util: GlobalService) {
    this.url = 'http://localhost/opensipca-back/public/index.php/api/' + 'prog-carga-largos-detalle';
  }

  getAll(data): Observable<any> {
    return this.http.post<any>(this.url, data).pipe(
      tap((result) => {
        this.formatCols(result.tabla);
      })
    );
  }

  formatCols(aux) {
    return aux.map((p) => {
      if (p.QQ_LONG)
        p['QQ_LONG'] = this.util.formatStringToDecimal(p.QQ_LONG, 5, 2);

      if (p.QQ_ANCHO)
        p['QQ_ANCHO'] = this.util.formatStringToDecimal(p.QQ_ANCHO, 4, 2);

      if (p.QQ_DIAM)
        p['QQ_DIAM'] = this.util.formatStringToDecimal(p.QQ_DIAM, 5, 4);

      if (p.QQ_ESPES)
        p['QQ_ESPES'] = this.util.formatStringToDecimal(p.QQ_ESPES, 3, 3);

      if (p.QQ_CARGA)
        p['QQ_CARGA'] = this.util.formatStringToDecimal(p.QQ_CARGA, 12, 3);

      return p;
    });
  }
}
