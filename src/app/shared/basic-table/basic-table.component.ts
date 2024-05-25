import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ExcelService } from 'src/app/services/excel.service';

@Component({
  selector: 'app-basic-table',
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
  templateUrl: './basic-table.component.html',
})
export class BasicTableComponent implements OnInit {
  @Input() autoLayout: boolean;
  @Input() loading: boolean;
  @Input() cols: any[];
  @Input() resizable: boolean;
  @Input() selected: any;
  @Input() paginator: boolean;
  @Input() num: any;

  @Input() excel: boolean;
  @Input() filters: boolean;

  @Input() title: any;
  @Input() pag: any;
  @Output() selectedEvent = new EventEmitter<any>();

  filter: boolean;
  first: number = 0;
  rows_: any[];

  @Input()
  set rows(val: any) {
    this.rows_ = val;
    this.first = 0;
  }

  constructor(private excelService: ExcelService) {}

  ngOnInit(): void {
    this.pag = null;
    // this.search = false;
  }

  select($event) {
    this.selectedEvent.emit(this.selected);
  }

  exportExcel() {
    this.excelService.exportAsExcelFile(this.rows_, 'DOCUMENT');
  }

  filtersChange() {
    this.filter = this.filter ? false : true;
  }
}
