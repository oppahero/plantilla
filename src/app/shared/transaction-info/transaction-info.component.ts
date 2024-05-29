import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-transaction-info',
  templateUrl: './transaction-info.component.html',
  styleUrls: ['./transaction-info.component.scss'],
})
export class TransactionInfoComponent {
  @Input() W_PROG!: string
  @Input() W_COMANDO!: string
  @Input() W_IDEN!: string
  @Input() W_TIPO_MENSA!: string
  @Input() W_MENSA!: string

  displayHelp!: boolean

  getColor() {
    if (this.W_TIPO_MENSA === 'FE') return '#dc3545'
    if (this.W_TIPO_MENSA === 'WA') return '#f7d352'
    return '#28a745'
  }

  display(value: boolean) {
    this.displayHelp = value
  }
}
