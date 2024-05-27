import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EjeProgramaCargaService {
  private message = new BehaviorSubject<any>(new Array());
  public customMessage = this.message.asObservable();

  private activeTab(item: any): void {
    this.message.next(item);
  }

  /** Tabs */

  activeAutCarga() {
    this.activeTab(1);
  }

  activeOrdProg() {
    this.activeTab(2);
  }

  activeFrenteDesp() {
    this.activeTab(3);
  }
}
