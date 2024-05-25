import { AutCargaLargosDetService } from 'src/app/services/apt';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService, GlobalService } from 'src/app/services';
import { ActivatedRoute } from '@angular/router';
import { ToastComponent } from 'src/app/shared';
import { Location } from '@angular/common';
import { User } from 'src/app/models/user';

@Component({
    selector: 'app-aut-carga-det',
    templateUrl: './aut-carga-det.component.html',
    styleUrls: ['./aut-carga-det.component.scss'],
})
export class AutCargaDetComponent implements OnInit {
    user: User;
    title: string;
    cols: any[];
    rows: any[];
    loading: boolean;
    results: any = { parametro: {}, tabla: [] };

    @ViewChild(ToastComponent) toast: ToastComponent;

    constructor(
        private location: Location,
        private util: GlobalService,
        private authService: AuthService,
        private activatedRoute: ActivatedRoute,
        private autCargaDetService: AutCargaLargosDetService
    ) {
        this.results.parametro.PAG = '';
        this.title = 'Autorización Carga - Detalle';
    }

    ngOnInit(): void {
        this.user = this.authService.user();
        this.results.parametro.PAR_IDEN = this.user.username;

        this.results.parametro.N_SECUEN_PROG =
            this.activatedRoute.snapshot.params['autCarga'];
        this.setCols();
        this.consult();
    }

    setCols() {
        this.cols = [
            { field: 'CC_ORDEN_ENTREGA_MDW', header: 'Orden de Entrega' },
            { field: 'CC_POS_ODESP_MDW', header: 'Pos. Orden' },
            { field: 'CC_PEDIDO_MDW', header: 'Pedido' },
            { field: 'CC_POS_MDW', header: 'Pos. Pedido' },
            { field: 'NN_GUIA_DESP', header: 'Guía de Despacho' },
            { field: 'FF_CARGA', header: 'Fecha Progdo.' },
            { field: 'HH_CARGA_PROG', header: 'Hora Inicio Progdo.' },
            { field: 'HH_FINAL_PROG', header: 'Hora Fin Progdo.' },
            { field: 'DD_PRODUCTO', header: 'Producto' },
            { field: 'CC_TIPO_ACERO', header: 'Tipo de Acero' },
            { field: 'DD_NOR', header: 'Norma' },
            { field: 'DD_SUBNOR', header: 'SubNorma' },
            { field: 'CC_GRADO_ACERO', header: 'Grado Acero' },
            { field: 'CC_DESIGN_NOR', header: 'Designación Norma' },
            { field: 'QQ_DIAM', header: 'Diámetro (mm)' },
            { field: 'QQ_ANCHO', header: 'Ancho' },
            { field: 'QQ_ESPES', header: 'Espesor' },
            { field: 'QQ_LONG', header: 'Longitud' },
            { field: 'QQ_DIAM_PLG', header: 'Diámetro (plg)' },
            { field: 'QQ_CARGA', header: 'Peso Progdo. (kg)' },
        ];
    }

    filter(results) {
        return results['tabla'].filter((x) => x.CC_ORDEN_ENTREGA_MDW != '');
    }

    notification(aux: string, mssg: string) {
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
        this.results.parametro = results['parametro'];
        this.rows = aux;
        this.notification(
            results.parametro.W_TIPO_MENSA,
            results.parametro.W_MENSA
        );
    }

    catchError(err) {
        console.log(err);
        this.toast.showError('Ha ocurrido un error.');
    }

    get() {
        this.loading = true;

        this.autCargaDetService
            .getAll(this.results)
            .toPromise()
            .then((results) => {
                this.success(results);
            })
            .catch((err) => {
                this.catchError(err);
            })
            .finally(() => (this.loading = false));
    }

    consult() {
        let aux = { ...this.results.parametro };

        this.results.parametro = {
            PAR_IDEN: this.user.username,
            N_SECUEN_PROG_MDW: this.util.validate(aux.N_SECUEN_PROG),
            C_GRP_ALM: '',
            N_SECUEN_PROG: '',
            W_INI_CONSU: '',
            W_PRIM_LIN: '',
            W_CLAVE: '',
            PAG: '',
        };

        this.get();
    }

    nextPage() {
        this.get();
    }

    nextPageFlag(): boolean {
        return this.results.parametro.W_C_MENSA == '010' ? false : true;
    }

    back() {
        this.location.back();
    }
}
