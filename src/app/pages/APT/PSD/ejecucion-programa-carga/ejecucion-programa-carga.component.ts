import { EjeProgramaCargaService } from 'src/app/services/apt'
import { Router, ActivatedRoute } from '@angular/router'
import { Component, OnInit, ChangeDetectorRef, AfterContentChecked } from '@angular/core'
import { MenuItem } from 'primeng/api'

@Component({
  selector: 'app-ejecucion-programa-carga',
  templateUrl: './ejecucion-programa-carga.component.html',
  styleUrls: ['./ejecucion-programa-carga.component.scss'],
})
export class EjecucionProgramaCargaComponent implements OnInit, AfterContentChecked {
  items: MenuItem[]
  activeItem: MenuItem

  constructor(
    private router: Router,
    private cdRef: ChangeDetectorRef,
    private tab: EjeProgramaCargaService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngAfterContentChecked(): void {
    this.cdRef.detectChanges()
  }

  ngOnInit(): void {
    this.items = [
      { label: 'Autorización Carga', routerLink: 'aut-carga' },
      { label: 'Ord. Programadas', routerLink: 'ord-prog-largos' },
      { label: 'Frente de Despacho', routerLink: 'frent-desp' },
    ]

    this.activeItem = this.items[0]

    this.tab.customMessage.subscribe((i) => {
      if (i) {
        this.activeItem = this.items[i - 1]
      }
    })
  }

  navigate() {
    this.router.navigate([this.activeItem.routerLink], {
      relativeTo: this.activatedRoute,
    })
  }
}
