import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'
import { NotfoundComponent } from './demo/components/notfound/notfound.component'
import { authGuard } from './auth.guard'
import { AppLayoutComponent } from './layout/app.layout.component'

const appRoutes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then(
        (m) => m.AuthModule
      ),
  },

  {
    path: '',
    component: AppLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'apt',
        loadChildren: () =>
          import('./pages/APT/apt.module').then((m) => m.APTModule),
      },
      {
        path: 'demo',
        loadChildren: () =>
          import('./demo/components/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'uikit',
        loadChildren: () =>
          import('./demo/components/uikit/uikit.module').then(
            (m) => m.UIkitModule
          ),
      },
      {
        path: 'utilities',
        loadChildren: () =>
          import('./demo/components/utilities/utilities.module').then(
            (m) => m.UtilitiesModule
          ),
      },
      {
        path: 'documentation',
        loadChildren: () =>
          import(
            './demo/components/documentation/documentation.module'
          ).then((m) => m.DocumentationModule),
      },
      {
        path: 'blocks',
        loadChildren: () =>
          import('./demo/components/primeblocks/primeblocks.module').then(
            (m) => m.PrimeBlocksModule
          ),
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./demo/components/pages/pages.module').then(
            (m) => m.PagesModule
          ),
      },
    ],
  },
  // {
  //     path: '', component: AppLayoutComponent,
  //     children: [
  //         { path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
  //         { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
  //         { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
  //         { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
  //         { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
  //         { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) }
  //     ]
  // },

  {
    path: 'landing',
    loadChildren: () =>
      import('./demo/components/landing/landing.module').then(
        (m) => m.LandingModule
      ),
  },
  { path: 'notfound', component: NotfoundComponent },
  { path: '**', redirectTo: '/notfound' },
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
        onSameUrlNavigation: 'reload',
      }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
