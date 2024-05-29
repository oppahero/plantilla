import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ButtonModule } from 'primeng/button'
import { InputTextModule } from 'primeng/inputtext'
import { TableModule } from 'primeng/table'
import { TooltipModule } from 'primeng/tooltip'
import { Column } from 'src/app/models/primeng'
import { ExcelService } from 'src/app/services/excel.service'

@Component({
  selector: 'app-reorder-table',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule,
    ButtonModule,
  ],
  templateUrl: './reorder-table.component.html',
})
export class ReorderTableComponent implements OnInit {
  @Input() scrollable: boolean = true
  @Input() scrollHeight: string = '250px'

  @Input() autoLayout!: boolean
  @Input() loading!: boolean
  @Input() cols!: Column[]
  @Input() resizable!: boolean
  @Input() selected!: any
  @Input() paginator!: boolean
  @Input() num!: any
  @Input() key!: string

  @Input() excel!: boolean
  @Input() filters!: boolean
  @Input() reorder!: boolean

  @Input() title!: string
  @Input() pag!: string
  @Output() selectedEvent = new EventEmitter<any>()

  filter!: boolean
  first: number = 0
  rows_!: any[]

  @Input()
  set rows(val: any) {
    this.rows_ = val
    this.first = 0
  }

  constructor(private excelService: ExcelService) {}

  ngOnInit() {
    this.pag = null
  }

  select() {
    this.selectedEvent.emit(this.selected)
  }

  exportExcel() {
    this.excelService.exportAsExcelFile(this.rows_, 'DOCUMENT')
  }

  filtersChange() {
    this.filter = this.filter ? false : true
  }
}
