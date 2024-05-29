import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Column } from 'src/app/models/primeng'

@Component({
  selector: 'app-ayuda-lab',
  templateUrl: './ayuda-lab.component.html',
})
export class AyudaLabComponent {
  @Input() helpTitle: string
  @Input() displayHelp!: boolean
  @Input() cols!: Column[]
  @Input() rows!: any[]
  @Input() selected!: any
  @Input() pag!: any
  @Input() W_PRIM_LIN!: string
  @Input() W_INDICE!: string
  @Input() num!: any
  @Input() loading!: boolean
  @Input() excel!: boolean
  @Input() paginator!: boolean
  @Input() W_PROG!: string
  @Input() filters!: boolean
  @Input() W_SALGO!: string
  @Input() nextFlag: boolean
  @Input() previousFlag: boolean
  @Input() W_C_MENSA!: string
  @Input() W_MENSA!: string
  @Input() acceptFlag!: boolean

  @Input() params!: any

  @Output() displayEvent = new EventEmitter<boolean>()
  @Output() selectEvent = new EventEmitter<any>()

  @Output() previousPageEvent = new EventEmitter<any>()
  @Output() nextPageEvent = new EventEmitter<any>()


  constructor() {
    this.paginator = false
  }

  previousPageFlag(): boolean {
    return this.pag > '001' ? false : true
  }

  nextPageFlag(): boolean {
    return this.W_MENSA === '42 ** CONTINUA' ||
      this.W_MENSA === '193 CONTINUA' ||
      this.W_SALGO === 'S'
      ? false
      : true
  }


  displayChange(value: boolean) {
    this.displayEvent.emit(value)
  }

  close() {
    this.displayHelp = false
    this.displayChange(this.displayHelp)
  }

  select() {
    this.selectEvent.emit(this.selected)
    this.close()
  }

  nextPage() {
    this.nextPageEvent.emit()
  }

  previousPage() {
    this.previousPageEvent.emit()
  }

  selectedRow(value: any) {
    this.selected = value
  }
}
