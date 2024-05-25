import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  template: `
    <section class="row">
      <section class="col-md-12">
        <h5>
          <strong> {{ title }}</strong>
        </h5>
      </section>
    </section>
    <hr />
  `,
})
export class TitleComponent {
  @Input() title: any;
}
