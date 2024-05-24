import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-transaction-info',
    templateUrl: './transaction-info.component.html',
    styleUrls: ['./transaction-info.component.scss'],
})
export class TransactionInfoComponent {
    @Input() W_PROG: any;
    @Input() W_COMANDO: any;
    @Input() W_IDEN: any;
    @Input() W_TIPO_MENSA: any;
    @Input() W_MENSA: any;

    displayHelp: boolean;

    getColor() {
        if (this.W_TIPO_MENSA == 'FE') return '#dc3545';
        if (this.W_TIPO_MENSA == 'WA') return '#f7d352';
        return '#28a745';
    }

    display(value) {
        this.displayHelp = value;
    }
}
