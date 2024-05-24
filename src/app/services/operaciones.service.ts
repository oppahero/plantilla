import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperacionesService {

  private message = new BehaviorSubject<any>(new Array());
  public customMessage = this.message.asObservable();

  constructor() {}

  active(item: any): void {
    this.message.next(item);
  }

}
