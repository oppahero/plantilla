import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-ayuda-crud',
  templateUrl: './ayuda-crud.component.html',
})
export class AyudaCrudComponent {
  @Input() helpTitle: any
  @Input() displayHelp: boolean
  @Input() cols: any[]
  @Input() rows: any[]
  @Input() selected: any
  @Input() pag: any
  @Input() W_PRIM_LIN: any
  @Input() W_INDICE: any
  @Input() num: any
  @Input() loading: boolean
  @Input() excel: boolean
  @Input() paginator: boolean
  @Input() W_PROG: any
  @Input() filters: boolean
  @Input() W_SALGO: any
  @Input() nextFlag: boolean
  @Input() previousFlag: boolean
  @Input() detailFlag: boolean
  @Input() altaFlag: boolean
  @Input() bajaFlag: boolean
  @Input() updateFlag: boolean
  @Input() acceptFlag: boolean

  @Input() W_C_MENSA: any
  @Input() W_MENSA: any

  @Input() params: any

  @Output() displayEvent = new EventEmitter<boolean>()
  @Output() selectEvent = new EventEmitter<any>()

  @Output() previousPageEvent = new EventEmitter<any>()
  @Output() nextPageEvent = new EventEmitter<any>()

  @Output() detailPageEvent = new EventEmitter<any>()
  @Output() updatePageEvent = new EventEmitter<any>()
  @Output() altaPageEvent = new EventEmitter<any>()
  @Output() bajaPageEvent = new EventEmitter<any>()

  constructor() {
    this.paginator = false
  }

  previousPageFlag(): boolean {
    return this.pag > '001' ? false : true
  }

  nextPageFlag(): boolean {
    return this.W_MENSA == '42 ** CONTINUA' ||
      this.W_MENSA == '193 CONTINUA' ||
      this.W_SALGO == 'S'
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

  previousPage() {
    this.previousPageEvent.emit()
  }
  nextPage() {
    this.nextPageEvent.emit()
  }

  detailPage() {
    this.detailPageEvent.emit()
  }

  altaPage() {
    this.altaPageEvent.emit()
  }

  bajaPage() {
    this.bajaPageEvent.emit()
  }

  updatePage() {
    this.updatePageEvent.emit()
  }

  selectedRow(value: any) {
    this.selected = value
  }
}
