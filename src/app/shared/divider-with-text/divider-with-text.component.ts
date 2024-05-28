import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-divider-with-text',
  standalone: true,
  template: `
    <section class="row">
      <div class="col-md-12">
        <hr [attr.data-content]="text" class="hr-text" />
      </div>
    </section>
  `,
  styleUrls: ['./divider-with-text.component.scss'],
})
export class DividerWithTextComponent {
  @Input() text: string
}
