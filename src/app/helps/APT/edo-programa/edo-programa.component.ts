import { GlobalService } from 'src/app/services/global.service'
import { AyudaEdoProgramaService } from 'src/app/services/apt'
import { AuthService } from 'src/app/services/auth.service'
import { Component, OnInit, Input } from '@angular/core'
import { Output, EventEmitter } from '@angular/core'
import { User } from 'src/app/models/user'
import { MDWResponse } from 'src/app/models'
import { Column } from 'src/app/models/primeng'

@Component({
  selector: 'app-edo-programa',
  templateUrl: './edo-programa.component.html',
  styleUrls: ['./edo-programa.component.scss'],
})
export class EdoProgramaComponent implements OnInit {
  @Input() displayHelp!: boolean
  @Output() displayEvent = new EventEmitter<boolean>()
  @Output() selectEvent = new EventEmitter<any>()

  user!: User
  cols!: Column[]
  rows!: any[]
  loading!: boolean
  results: MDWResponse = { parametro: {}, tabla: [] }
  selected!: any

  constructor(
    private util: GlobalService,
    private authService: AuthService,
    private edoProgramaService: AyudaEdoProgramaService
  ) {}

  ngOnInit() {
    this.cols = [
      { field: 'NN_EDO_PROG', header: 'Cód. Edo. Prog' },
      { field: 'DD_EDO_PROG_REDUCI', header: 'Desc. Abrev. Edo. Prog.' },
      { field: 'DD_EDO_PROG', header: 'Estado Programa' },
    ]
    this.user = this.authService.user()
    this.consult()
  }

  filter(response: any): object[] {
    return response['tabla'].filter((x) => x.NN_EDO_PROG != '')
  }

  getAll() {
    this.loading = true

    this.edoProgramaService.getAll(this.results).subscribe({
      next: (response) => {
        this.results.parametro = response.parametro
        this.rows = this.filter(response)
      },
      error: (err) => console.log(err),
      complete: () => (this.loading = false),
    })
  }

  consult() {
    const aux = { ...this.results.parametro }

    this.results.parametro = {
      PAR_IDEN: this.user?.username,
      D_EDO_PROG: this.util.validate(aux.D_EDO_PROG),
      ACCION: 'C',
      W_ISN_S: '',
      W_ISN_A: '',
      PAG: '',
    }

    this.getAll()
  }

  nextPage() {
    this.results.parametro.ACCION = 'S'
    this.getAll()
  }

  previousPage() {
    this.results.parametro.ACCION = 'R'
    this.getAll()
  }

  /** Puente comunicación*/

  close() {
    this.displayHelp = false
    this.displayEvent.emit(this.displayHelp)
    this.consult()
  }

  select(selected) {
    this.selectEvent.emit(selected)
    this.selected = selected
    this.close()
  }
}
