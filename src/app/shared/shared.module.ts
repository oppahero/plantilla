import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Shared Components
import { AyudaComponent } from './ayuda/ayuda.component';
import { AyudaCrudComponent } from './ayuda-crud/ayuda-crud.component';
import { AyudaLabComponent } from './ayuda-lab/ayuda-lab.component';
import { TransactionInfoComponent } from './transaction-info/transaction-info.component';

// Shared Modules
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';
import { TooltipModule } from 'primeng/tooltip';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { PanelMenuModule } from 'primeng/panelmenu';
import { InputTextareaModule } from 'primeng/inputtextarea';

// DIRECTIVAS
import { OnlyNumber } from './../directives/onlynumber.directive';
import { NumericDirective } from './../directives/number.directive';
import { FillWithCero } from './../directives/fill.directive';

// Componentes standalone
import { BasicTableComponent } from './basic-table/basic-table.component';
import { BlockUiComponent } from './block-ui/block-ui.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DialogComponent } from './dialog/dialog.component';
import { DividerWithTextComponent } from './divider-with-text/divider-with-text.component';
import { GreyPcardComponent } from './grey-pcard/grey-pcard.component';
import { PanelComponent } from './panel/panel.component';
import { ReorderTableComponent } from './reorder-table/reorder-table.component';
import { TabMenuComponent } from './tab-menu/tab-menu.component';
import { TitleComponent } from './title/title.component';
import { ToastComponent } from './toast/toast.component';
import { InputGroupModule } from 'primeng/inputgroup';

@NgModule({
  declarations: [
    AyudaComponent,
    AyudaLabComponent,
    AyudaCrudComponent,
    TransactionInfoComponent,
    OnlyNumber,
    NumericDirective,
    FillWithCero,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    CardModule,
    InputGroupModule,

    ConfirmDialogComponent,
    GreyPcardComponent,
    PanelComponent,
    BlockUiComponent,
    DialogComponent,
    TabMenuComponent,
    TitleComponent,
    ToastComponent,
    DividerWithTextComponent,
    BasicTableComponent,
    ReorderTableComponent,
  ],
  exports: [
    CommonModule,
    ConfirmDialogComponent,
    GreyPcardComponent,
    PanelComponent,
    BlockUiComponent,
    DialogComponent,
    TabMenuComponent,
    TitleComponent,
    ToastComponent,
    DividerWithTextComponent,
    BasicTableComponent,
    ReorderTableComponent,

    AyudaComponent,
    AyudaLabComponent,
    AyudaCrudComponent,
    TransactionInfoComponent,
    OnlyNumber,
    NumericDirective,
    FillWithCero,

    TableModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    TooltipModule,
    FormsModule,
    ReactiveFormsModule,
    RadioButtonModule,
    ToggleButtonModule,
    DropdownModule,
    CalendarModule,
    PanelMenuModule,
    InputTextareaModule,
    SelectButtonModule,
    ToolbarModule,
    CardModule,
    InputNumberModule,
    CheckboxModule,
    MessagesModule,
    MessageModule,
    InputGroupModule,
  ],
})
export class SharedModule {}
