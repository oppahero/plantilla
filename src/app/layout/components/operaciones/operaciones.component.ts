import { Component, OnInit, OnDestroy } from '@angular/core'
import { GlobalService } from 'src/app/services/global.service'
import { MenuItem } from 'primeng/api'
import { OperacionesService } from 'src/app/services/operaciones.service'

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.scss'],
})
export class OperacionesComponent implements OnInit, OnDestroy {
  items: MenuItem[]

  constructor(
    private util: GlobalService,
    private operation: OperacionesService
  ) {}

  ngOnInit(): void {
    this.util.customMessage.subscribe((x) => {
      this.items = x.items
    })
  }

  ngOnDestroy() {
    this.items = []
  }

  activeMenu($event) {
    // console.log('tengo:', $event.target.textContent);
    this.operation.active($event.target.textContent)
  }
}
