import { OnInit } from '@angular/core'
import { Component } from '@angular/core'
import { LayoutService } from '../../service/app.layout.service'
import { User } from 'src/app/models'
import { MenuItem } from 'primeng/api'
import { AuthService, GlobalService } from 'src/app/services'
// declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
  model: any[] = []

  user: User
  items: MenuItem[]
  asset: any

  groups = [
    { label: 'Inventario y Despacho' },
    { label: 'Programación' },
    { label: 'Producción' },
    { label: 'Inventario Proceso' },
    { label: 'Calidad' },
  ]

  constructor(
    public layoutService: LayoutService,
    public util: GlobalService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    // $('[data-widget="treeview"]').Treeview('init');
    this.user = this.authService.user()
    this.asset = this.util.urlAssets
    this.init()

    this.model = [
      {
        label: 'Inventario y Despacho',
        items: [
          {
            label: 'Prog. y Seg. de Despacho',
            icon: 'pi pi-fw pi-home',
            routerLink: ['apt/psd'],
            routerLinkActiveOptions: '{ exact: false }',
            command: () => {
              this.PSD()
            },
          },
          {
            label: 'Ingresos al Almacén',
            icon: 'pi pi-fw pi-home',
          },
          {
            label: 'Gestión de Almacén',
            icon: 'pi pi-fw pi-home',
          },
          {
            label: 'Gestión y Control de Inventario',
            icon: 'pi pi-fw pi-home',
          },
        ],
      },

      {
        icon: 'pi pi-fw pi-briefcase',
        items: [
          {
            label: 'Inventario y Despacho',
            icon: 'pi pi-fw pi-user',
            items: [
              {
                label: 'Prog. y Seg. de Despacho',
                // icon: 'pi pi-fw pi-sign-in',
                routerLink: ['apt/psd'],
                command: () => {
                  this.PSD()
                },
                routerLinkActiveOptions: '{ exact: false }',
              },
              {
                label: 'Ingresos al Almacén',
                // icon: 'pi pi-fw pi-home',
              },
              {
                label: 'Gestión de Almacén',
                // icon: 'pi pi-fw pi-home',
              },
              {
                label: 'Gestión y Control de Inventario',
                // icon: 'pi pi-fw pi-home',
              },
            ],
          },
        ],
      },

      // {
      //   label: 'Home',
      //   items: [
      //     {
      //       label: 'Dashboard',
      //       icon: 'pi pi-fw pi-home',
      //       routerLink: ['/'],
      //     },
      //   ],
      // },
      // {
      //   label: 'UI Components',
      //   items: [
      //     {
      //       label: 'Form Layout',
      //       icon: 'pi pi-fw pi-id-card',
      //       routerLink: ['/uikit/formlayout'],
      //     },
      //     {
      //       label: 'Input',
      //       icon: 'pi pi-fw pi-check-square',
      //       routerLink: ['/uikit/input'],
      //     },
      //     {
      //       label: 'Float Label',
      //       icon: 'pi pi-fw pi-bookmark',
      //       routerLink: ['/uikit/floatlabel'],
      //     },
      //     {
      //       label: 'Invalid State',
      //       icon: 'pi pi-fw pi-exclamation-circle',
      //       routerLink: ['/uikit/invalidstate'],
      //     },
      //     {
      //       label: 'Button',
      //       icon: 'pi pi-fw pi-box',
      //       routerLink: ['/uikit/button'],
      //     },
      //     {
      //       label: 'Table',
      //       icon: 'pi pi-fw pi-table',
      //       routerLink: ['/uikit/table'],
      //     },
      //     {
      //       label: 'List',
      //       icon: 'pi pi-fw pi-list',
      //       routerLink: ['/uikit/list'],
      //     },
      //     {
      //       label: 'Tree',
      //       icon: 'pi pi-fw pi-share-alt',
      //       routerLink: ['/uikit/tree'],
      //     },
      //     {
      //       label: 'Panel',
      //       icon: 'pi pi-fw pi-tablet',
      //       routerLink: ['/uikit/panel'],
      //     },
      //     {
      //       label: 'Overlay',
      //       icon: 'pi pi-fw pi-clone',
      //       routerLink: ['/uikit/overlay'],
      //     },
      //     {
      //       label: 'Media',
      //       icon: 'pi pi-fw pi-image',
      //       routerLink: ['/uikit/media'],
      //     },
      //     {
      //       label: 'Menu',
      //       icon: 'pi pi-fw pi-bars',
      //       routerLink: ['/uikit/menu'],
      //       routerLinkActiveOptions: {
      //         paths: 'subset',
      //         queryParams: 'ignored',
      //         matrixParams: 'ignored',
      //         fragment: 'ignored',
      //       },
      //     },
      //     {
      //       label: 'Message',
      //       icon: 'pi pi-fw pi-comment',
      //       routerLink: ['/uikit/message'],
      //     },
      //     {
      //       label: 'File',
      //       icon: 'pi pi-fw pi-file',
      //       routerLink: ['/uikit/file'],
      //     },
      //     {
      //       label: 'Chart',
      //       icon: 'pi pi-fw pi-chart-bar',
      //       routerLink: ['/uikit/charts'],
      //     },
      //     {
      //       label: 'Misc',
      //       icon: 'pi pi-fw pi-circle',
      //       routerLink: ['/uikit/misc'],
      //     },
      //   ],
      // },
      // {
      //   label: 'Prime Blocks',
      //   items: [
      //     {
      //       label: 'Free Blocks',
      //       icon: 'pi pi-fw pi-eye',
      //       routerLink: ['/blocks'],
      //       badge: 'NEW',
      //     },
      //     {
      //       label: 'All Blocks',
      //       icon: 'pi pi-fw pi-globe',
      //       url: ['https://www.primefaces.org/primeblocks-ng'],
      //       target: '_blank',
      //     },
      //   ],
      // },
      // {
      //   label: 'Utilities',
      //   items: [
      //     {
      //       label: 'PrimeIcons',
      //       icon: 'pi pi-fw pi-prime',
      //       routerLink: ['/utilities/icons'],
      //     },
      //     {
      //       label: 'PrimeFlex',
      //       icon: 'pi pi-fw pi-desktop',
      //       url: ['https://www.primefaces.org/primeflex/'],
      //       target: '_blank',
      //     },
      //   ],
      // },
      // {
      //   label: 'Pages',
      //   icon: 'pi pi-fw pi-briefcase',
      //   items: [
      //     {
      //       label: 'Landing',
      //       icon: 'pi pi-fw pi-globe',
      //       routerLink: ['/landing'],
      //     },
      //     {
      //       label: 'Auth',
      //       icon: 'pi pi-fw pi-user',
      //       items: [
      //         {
      //           label: 'Login',
      //           icon: 'pi pi-fw pi-sign-in',
      //           routerLink: ['/auth/login'],
      //         },
      //         {
      //           label: 'Error',
      //           icon: 'pi pi-fw pi-times-circle',
      //           routerLink: ['/auth/error'],
      //         },
      //         {
      //           label: 'Access Denied',
      //           icon: 'pi pi-fw pi-lock',
      //           routerLink: ['/auth/access'],
      //         },
      //       ],
      //     },
      //     {
      //       label: 'Crud',
      //       icon: 'pi pi-fw pi-pencil',
      //       routerLink: ['/pages/crud'],
      //     },
      //     {
      //       label: 'Timeline',
      //       icon: 'pi pi-fw pi-calendar',
      //       routerLink: ['/pages/timeline'],
      //     },
      //     {
      //       label: 'Not Found',
      //       icon: 'pi pi-fw pi-exclamation-circle',
      //       routerLink: ['/notfound'],
      //     },
      //     {
      //       label: 'Empty',
      //       icon: 'pi pi-fw pi-circle-off',
      //       routerLink: ['/pages/empty'],
      //     },
      //   ],
      // },
      // {
      //   label: 'Hierarchy',
      //   items: [
      //     {
      //       label: 'Submenu 1',
      //       icon: 'pi pi-fw pi-bookmark',
      //       items: [
      //         {
      //           label: 'Submenu 1.1',
      //           icon: 'pi pi-fw pi-bookmark',
      //           items: [
      //             {
      //               label: 'Submenu 1.1.1',
      //               icon: 'pi pi-fw pi-bookmark',
      //             },
      //             {
      //               label: 'Submenu 1.1.2',
      //               icon: 'pi pi-fw pi-bookmark',
      //             },
      //             {
      //               label: 'Submenu 1.1.3',
      //               icon: 'pi pi-fw pi-bookmark',
      //             },
      //           ],
      //         },
      //         {
      //           label: 'Submenu 1.2',
      //           icon: 'pi pi-fw pi-bookmark',
      //           items: [
      //             {
      //               label: 'Submenu 1.2.1',
      //               icon: 'pi pi-fw pi-bookmark',
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //     {
      //       label: 'Submenu 2',
      //       icon: 'pi pi-fw pi-bookmark',
      //       items: [
      //         {
      //           label: 'Submenu 2.1',
      //           icon: 'pi pi-fw pi-bookmark',
      //           items: [
      //             {
      //               label: 'Submenu 2.1.1',
      //               icon: 'pi pi-fw pi-bookmark',
      //             },
      //             {
      //               label: 'Submenu 2.1.2',
      //               icon: 'pi pi-fw pi-bookmark',
      //             },
      //           ],
      //         },
      //         {
      //           label: 'Submenu 2.2',
      //           icon: 'pi pi-fw pi-bookmark',
      //           items: [
      //             {
      //               label: 'Submenu 2.2.1',
      //               icon: 'pi pi-fw pi-bookmark',
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   label: 'Get Started',
      //   items: [
      //     {
      //       label: 'Documentation',
      //       icon: 'pi pi-fw pi-question',
      //       routerLink: ['/documentation'],
      //     },
      //     {
      //       label: 'View Source',
      //       icon: 'pi pi-fw pi-search',
      //       url: ['https://github.com/primefaces/sakai-ng'],
      //       target: '_blank',
      //     },
      //   ],
      // },
    ]
  }

  breadcrum(i, sub): any {
    return {
      group: this.groups[i].label,
      subgroup: sub,
    }
  }

  struct(i, sub): any {
    return {
      breadcrumb: this.breadcrum(i, sub),
      items: this.items,
    }
  }

  init() {
    this.items = []
    this.util.newMessage({
      breadcrumb: null,
      items: this.items,
    })
  }

  PSD() {
    this.items = [
      {
        label: 'Administración de Catálogos Básicos',
        items: [
          {
            label: 'Marcas de Transporte',
            routerLink: 'apt/psd/marcas-trspt',
          },
          {
            label: 'Registro de Transportistas',
            routerLink: 'apt/psd/reg-trp',
          },
          {
            label: 'Tolerancia de Báscula',
            routerLink: 'apt/psd/tole-bascu',
          },
        ],
      },
      {
        label: 'Despacho Terrestre',
        items: [
          {
            label: 'Ejecución de Programa de Carga Largos',
            routerLink: 'apt/psd/prog-carga-largo',
          },
          {
            label: 'Ejecución de Programa de Carga Planos',
            routerLink: 'apt/psd/progCargaPlano',
          },
          {
            label: 'Guía Despacho',
            routerLink: 'apt/psd/guia-despacho',
          },
          {
            label: 'Registro de Entrada a Planta',
            routerLink: 'apt/psd/reg-entrada-salida',
          },
          {
            label: 'Pool de Vehiculos de Carga',
            routerLink: 'apt/psd/pool-vehiculos-carga',
          },
          {
            label: 'Despacho de Material',
            routerLink: 'apt/psd/desp-mat',
          },
          {
            label: 'Guía Despacho/Transferencia Externa',
            routerLink: 'apt/psd/guia-despacho-transf-externa',
          },
        ],
      },
      {
        label: 'Consulta de Pedidos / Orden de Entrega',
        items: [
          {
            label: 'Consulta de Orden de Entrega',
            routerLink: 'apt/psd/orden-entrega',
          },
          {
            label: 'Consulta de Orden de Entrega Programada - Largos',
            routerLink: 'apt/psd/orden-entrega-programada-largos',
          },
          {
            label: 'Consulta de Orden Entrega Programada - Planos',
            routerLink: 'apt/psd/orden-entrega-programada-planos',
          },
        ],
      },
      {
        label: 'Carga / Descarga en Frente',
        items: [
          {
            label: 'Carga / Descarga en Frente',
            routerLink: 'apt/psd/carga-descarga-fte',
          },
          {
            label: 'Carga / Descarga en Frente Planos',
            routerLink: 'apt/psd/cargaDescFtePlanos',
          },
          {
            label: 'Recepción de Material por Transf. Externa Marítima',
            routerLink: 'apt/psd/recepMaterialMaritimo',
          },
          {
            label: 'Recepción de Material por Transf. Externa Terrestre',
            routerLink: 'apt/psd/recepMaterialTerrestre',
          },
        ],
      },
      {
        label: 'Despacho Marítimo',
        items: [
          {
            label: 'Ejecucion del Despacho Maritimo',
            routerLink: 'apt/psd/ejecucion-despacho-maritimo',
          },
          {
            label: 'Administración de Buques',
            routerLink: 'apt/psd/admin-buques',
          },
          {
            label: 'Administración de Embarques',
            routerLink: 'apt/psd/adminEmbarques',
          },
          {
            label: 'Administración de Eventos',
            routerLink: 'apt/psd/admin-evento',
          },
          {
            label: 'Administración de Subeventos',
            routerLink: 'apt/psd/admin-subevento',
          },
          {
            label: 'Registro de Eventos del Embarque',
            routerLink: 'apt/psd/reg-eventos-embarque',
          },
          {
            label: 'Administración de Mate`s Receipt',
            routerLink: 'apt/psd/adm-mates-receipt',
          },
          {
            label: 'Administración de Lista de Carga',
            routerLink: 'apt/psd/administracion-listas-carga',
          },
          {
            label: 'Consulta de Listas de Carga',
            routerLink: 'apt/psd/cons-listas-carga',
          },
        ],
      },
    ]

    this.util.newMessage(this.struct(0, 'Prog. y Seg. de Despacho'))
  }
}
