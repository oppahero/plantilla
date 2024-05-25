import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ayuda-lab',
  templateUrl: './ayuda-lab.component.html',
})
export class AyudaLabComponent implements OnInit {
  @Input() helpTitle: any;
  @Input() displayHelp: boolean;
  @Input() cols: any[];
  @Input() rows: any[];
  @Input() selected: any;
  @Input() pag: any;
  @Input() W_PRIM_LIN: any;
  @Input() W_INDICE: any;
  @Input() num: any;
  @Input() loading: boolean;
  @Input() excel: boolean;
  @Input() paginator: boolean;
  @Input() W_PROG: any;
  @Input() filters: boolean;
  @Input() W_SALGO: any;
  @Input() nextFlag: boolean;
  @Input() previousFlag: boolean;
  @Input() W_C_MENSA: any;
  @Input() W_MENSA: any;

  @Input() params: any;

  @Output() displayEvent = new EventEmitter<boolean>();
  @Output() selectEvent = new EventEmitter<any>();

  @Output() previousPageEvent = new EventEmitter<any>();
  @Output() nextPageEvent = new EventEmitter<any>();

  @Input() acceptFlag: boolean;

  constructor() {
    this.paginator = false;
  }

  ngOnInit(): void {}

  previousPageFlag(): boolean {
    return this.pag > '001' ? false : true;
  }

  nextPageFlag(): boolean {
    return this.W_MENSA == '42 ** CONTINUA' ||
      this.W_MENSA == '193 CONTINUA' ||
      this.W_SALGO == 'S'
      ? false
      : true;

    //return false;

    // return this.W_PRIM_LIN == '' ? true : false;
  }

  /** Puente comunicación*/

  displayChange(value: boolean) {
    this.displayEvent.emit(value);
  }

  close() {
    this.displayHelp = false;
    this.displayChange(this.displayHelp);
  }

  select() {
    this.selectEvent.emit(this.selected);
    this.close();
  }

  nextPage() {
    this.nextPageEvent.emit();
  }

  previousPage() {
    this.previousPageEvent.emit();
  }

  selectedRow(value: any) {
    this.selected = value;
  }
}
