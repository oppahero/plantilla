import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { RouterModule } from '@angular/router';
import { AppMenuComponent } from './components/appMenu/app.menu.component';
import { AppMenuitemComponent } from './components/appMenu/app.menuitem.component';
import { AppFooterComponent } from './components/appFooter/app.footer.component';
import { AppTopBarComponent } from './components/appTopbar/app.topbar.component';
import { AppSidebarComponent } from "./components/appSidebar/app.sidebar.component";
import { AppConfigModule } from './config/config.module';
import { AppLayoutComponent } from "./app.layout.component";
@NgModule({
    declarations: [
        AppMenuitemComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppMenuComponent,
        AppSidebarComponent,
        AppLayoutComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        InputTextModule,
        SidebarModule,
        BadgeModule,
        RadioButtonModule,
        InputSwitchModule,
        RippleModule,
        RouterModule,
        AppConfigModule,

    ],
    exports: [AppLayoutComponent]
})
export class AppLayoutModule { }
