import { ConfirmDialogComponent, ToastComponent } from 'src/app/shared';
import { AuthService, GlobalService } from 'src/app/services';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { User } from 'src/app/models/user';
import {
  AutCargaLargosService,
  EjeProgramaCargaService,
  AutCargaLargosCanService,
  AutCargaLargosConfirService,
} from 'src/app/services/apt';

@Component({
  selector: 'app-aut-carga',
  templateUrl: './aut-carga.component.html',
  styleUrls: ['./aut-carga.component.scss'],
  providers: [DatePipe],
})
export class AutCargaComponent implements OnInit {
  user: User;
  title: string;
  cols: any[];
  rows: any[];
  loading: boolean;
  results: any = { parametro: {}, tabla: [] };
  selected: any;
  displayHelp: boolean = false;
  date: any;

  @ViewChild(ToastComponent) toast: ToastComponent;
  @ViewChild(ConfirmDialogComponent) confirm: ConfirmDialogComponent;

  constructor(
    private router: Router,
    private datePipe: DatePipe,
    private util: GlobalService,
    private authService: AuthService,
    private tab: EjeProgramaCargaService,
    private activatedRoute: ActivatedRoute,
    private autCargaService: AutCargaLargosService,
    private autCargaCanService: AutCargaLargosCanService,
    private autCargaConfirService: AutCargaLargosConfirService
  ) {
    this.results.parametro.PAG = '';
    this.title = 'Ejecución de Programa de Carga - Autorización Carga';
  }

  ngOnInit(): void {
    this.tab.activeAutCarga();
    this.user = this.authService.user();
    this.date = this.autCargaService.getDate();
    this.results.parametro = this.autCargaService.getParams();
    this.setCols();
    this.consult();
  }

  setCols(){
    this.cols = [
        { field: 'NN_SECUEN_VIAJE', header: 'Sec. Despacho' },
        { field: 'NN_SECUEN_PROG', header: 'Autorización Carga' },
        { field: 'CC_ORDEN_DESP', header: 'Orden de Entrega' },
        { field: 'CC_POS_ODESP', header: 'Posición' },
        { field: 'DD_CLI_DESTINO', header: 'Cliente Destino' },
        { field: 'CC_COND_ENTREG', header: 'Cond. Entrega' },
        { field: 'DD_PUERTO', header: 'Pto. Destino' },
        { field: 'DD_PRODUCTO', header: 'Producto' },
        { field: 'QQ_CARGA_PROG', header: 'Peso Prgdo. (Kg)' },
        { field: 'QQ_CARGA_DESP', header: 'Peso Neto Desp. (Kg)' },
        { field: 'FF_CARGA', header: 'Fecha Prgdo.' },
        { field: 'HH_CARGA', header: 'Hora Prgdo.' },
        { field: 'CC_PROG_DESP', header: 'Programa' },
        { field: 'DD_EDO_PROG', header: 'Edo. Autorización' },
        { field: 'DD_TIPO_VIAJE', header: 'Tipo Viaje' },
        { field: 'DD_CIA_TRANSPORTE', header: 'Cía. Transportista' },
        { field: 'DD_NOMBRE_COND', header: 'Conductor' },
        { field: 'CC_TRSP_MOVIL', header: 'Placa Móvil' },
        { field: 'CC_TRSP_CARGA', header: 'Placa Carga' },
        { field: 'MM_IND_ELAB', header: 'Origen' },
      ];
  }

  filter(results): any {
    return results['tabla'].filter((x) => x.NN_SECUEN_VIAJE != '');
  }

  notification(aux, mssg) {
    switch (aux) {
      case 'FE':
        this.toast.showError(mssg);
        break;
      case 'WA':
        this.toast.showWarn(mssg);
        break;
      default:
        this.toast.showSuccess(mssg);
        break;
    }
  }

  success(results) {
    let aux = this.filter(results);
    this.results.parametro = results.parametro;
    this.rows = aux;
    if (aux) {
      this.selected = this.rows[0];
    }
    this.loading = false;
    this.notification(
      results.parametro.W_TIPO_MENSA,
      results.parametro.W_MENSA
    );
  }

  catchError(err) {
    console.log(err);
    this.loading = false;
    this.toast.showError('Ha ocurrido un error.');
  }

  getAll() {
    this.loading = true;

    this.autCargaService
      .getAll(this.results)
      .toPromise()
      .then((results) => {
        this.success(results);
      })
      .catch((err) => {
        this.catchError(err);
      });
  }

  consult() {
    this.selected = null;
    let aux = { ...this.results.parametro };
    let date = this.datePipe.transform(this.date, 'yyyyMMdd');

    this.results.parametro = {
      PAR_IDEN: this.user.username,
      C_GRP_ALM: this.util.validate(aux.C_GRP_ALM),
      N_PROG_DESP: this.util.validate(aux.N_PROG_DESP),
      F_CARGA: this.util.validate(date),
      N_SECUEN_PROG_MDW: this.util.validate(aux.N_SECUEN_PROG_MDW),
      C_EDO_PROG_MDW: this.util.validate(aux.C_EDO_PROG_MDW),
      PAG: '',
      ACCION: '',
      W_ISN: '',
      W_INI_CONSU1: '',
      W_INI_CONSU2: '',
      W_INI_CONSU3: '',
      W_PRIM_LIN_SEC: '',
      W_PRIM_LIN_EDO: '',
      W_PRIM_LIN_FEC: '',
      W_PIRM_LIN_C_PROG: '',
      W_INI_CONSU_C_PROG: '',
      N_SECUEN_VIAJE: '',
    };

    this.getAll();
  }

  /** */

  refreshConsult(results) {
    if (
      results.parametro.W_TIPO_MENSA == '' ||
      results.parametro.W_TIPO_MENSA == 'IN'
    )
      this.consult();
  }

  success_cs(results) {
    this.notification(
      results.parametro.W_TIPO_MENSA,
      results.parametro.W_MENSA
    );

    this.loading = false;
    this.refreshConsult(results);
  }

  params_cs(action, w_valida, nn_secuen): any {
    return {
      parametro: {
        ACCION: action,
        W_VALIDA: w_valida,
        NN_SECUEN_PROG: nn_secuen,
        PAR_IDEN: this.user.username,
      },
    };
  }

  cancel() {
    let params = this.params_cs('X', 'X', this.selected.NN_SECUEN_PROG);
    this.loading = true;

    this.autCargaCanService
      .cancel(params)
      .toPromise()
      .then((results) => {
        this.success_cs(results);
      })
      .catch((err) => {
        this.catchError(err);
      });
  }

  confirmation() {
    let params = this.params_cs('P', 'X', this.selected.NN_SECUEN_PROG);
    this.loading = true;

    this.autCargaConfirService
      .confirm(params)
      .toPromise()
      .then((results) => {
        this.success_cs(results);
      })
      .catch((err) => {
        this.catchError(err);
      });
  }

  /** Navegación */

  nextPage() {
    this.results.parametro.ACCION = 'S';
    this.getAll();
  }

  nextPageFlag(): boolean {
    return this.results.parametro.W_C_MENSA == '010' ? false : true;
  }

  // devFrente - confirmación
  devFrenteFlag(): boolean {
    return this.results.parametro.C_EDO_PROG_MDW == '03' &&
      this.selected &&
      this.selected.CC_EDO_PROG == '03'
      ? false
      : true;
  }

  // reordenar - cancelar
  rearrangeFLag(): boolean {
    return this.results.parametro.C_EDO_PROG_MDW == '09' &&
      this.selected &&
      this.selected.CC_EDO_PROG == '09'
      ? false
      : true;
  }

  reprintFlag(): boolean {
    return this.results.parametro.C_EDO_PROG_MDW != '09' &&
      this.selected &&
      this.selected.CC_EDO_PROG != '09'
      ? false
      : true;
  }

  detail() {
    this.navigate('detalle', this.selected.NN_SECUEN_PROG);
  }

  devFrent() {
    this.navigate('devFrente', this.selected.NN_SECUEN_PROG);
  }

  tracking() {
    this.navigate('seguimiento', this.selected.NN_SECUEN_PROG);
  }

  rearrange() {
    this.navigate('reordenar', this.results.parametro.C_EDO_PROG_MDW);
  }

  reprint() {
    this.navigate('reimp', this.selected.NN_SECUEN_PROG);
  }

  register() {
    this.router.navigate(['alta'], { relativeTo: this.activatedRoute });
  }

  externalCenterOffice() {
    this.router.navigate(['despachoCExt'], { relativeTo: this.activatedRoute });
  }

  saveParams() {
    this.autCargaService.setParams(this.results.parametro);
    this.autCargaService.setDate(this.date);
  }

  navigate(route, value) {
    this.saveParams();
    this.router.navigate([route, value], {
      relativeTo: this.activatedRoute,
    });
  }

  /** Manejadores del dialog */

  displayChange(value: boolean) {
    this.displayHelp = value;
  }

  selectedHelp(value) {
    this.results.parametro.C_EDO_PROG_MDW = this.util.fillWithCeros(
      value.NN_EDO_PROG,
      2
    );
    this.results.parametro.D_EDO_PROG = value.DD_EDO_PROG;
  }

  selectedRow(value) {
    this.selected = value;
  }

  /** Confirms Dialog */

  confirmDialog() {
    this.confirm.show('¿Está seguro que desea confirmar la carga?', 'confirm');
  }

  cancelDialog() {
    this.confirm.show(
      '¿Está seguro que desea cancelar la Autorización?',
      'cancel'
    );
  }

  confirmDialogAccept(key) {
    switch (key) {
      case 'confirm':
        this.confirmation();
        break;
      default:
        this.cancel();
        break;
    }
  }
}
