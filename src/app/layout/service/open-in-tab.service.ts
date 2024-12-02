import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { TabSelected } from 'src/app/models/tab-selected'

@Injectable()
export class OpenInTabService {

  private message = new BehaviorSubject<TabSelected>(null)

  public tab = this.message.asObservable()

  public newTab(item: any): void {
    this.message.next(item)
  }
}
