import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-grey-pcard',
  standalone: true,
  imports: [CardModule],
  template: `
    <p-card styleClass="grey-pcard">
      <ng-content></ng-content>
    </p-card>
  `,
  styleUrls: ['./grey-pcard.component.scss'],
})
export class GreyPcardComponent {}
