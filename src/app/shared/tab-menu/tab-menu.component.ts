import { Component, Input } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';

@Component({
    selector: 'app-tab-menu',
    standalone: true,
    imports: [TabMenuModule],
    template: `
        <p-tabMenu [model]="items" [activeItem]="activeItem"></p-tabMenu>
    `,
})
export class TabMenuComponent {
    @Input() items: any[];
    @Input() activeItem: any;
}
