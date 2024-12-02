import { Component, OnDestroy, Type } from '@angular/core'
import { TabSelected } from 'src/app/models/tab-selected'
import { AutCargaDetComponent } from 'src/app/pages/APT/PSD/ejecucion-programa-carga/aut-carga-det/aut-carga-det.component'
import { OpenInTabService } from '../../service/open-in-tab.service'
import { Subscription } from 'rxjs'
import { AutCargaComponent } from 'src/app/pages/APT/PSD/ejecucion-programa-carga/aut-carga/aut-carga.component'

interface Tab {
  title: string;
  component: Type<any>;
  id: number;

  structure?: any;
  activeTab?: Type<any>;
  history?: any[];
  componentMap?: { [key: string]: Type<any> };
}

@Component({
  selector: 'app-dynamic-tabs',
  templateUrl: './dynamicTabs.component.html',
})
export class DynamicTabsComponent implements OnDestroy {
  tabsSuscription: Subscription
  tabs: Tab[] = []

  private componentMap: { [key: string]: Type<any> } = {
    AutCargaComponent,
    AutCargaDetComponent,
  }

  constructor(private dynamicTabs: OpenInTabService) {
    this.tabsSuscription = this.dynamicTabs.tab.subscribe(
      (selected: TabSelected) => {
        if (!selected) return
        const { label, componentName, componentMap } = selected
        const component = this.getComponentByName(componentMap, componentName)
        if (component) this.addTab(label, component, componentMap)
      }
    )
  }

  get id(): number {
    return new Date().getTime()
  }

  ngOnDestroy(): void {
    this.tabsSuscription.unsubscribe()
  }

  closeTab(tab: Tab) {
    this.tabs = this.tabs.filter((t) => t !== tab)
  }

  addTab(title: string, component: Type<any>, componentMap) {
    const existingTab = this.tabs.find((t) => t.title === title)

    if (!existingTab) {
      const id = this.id
      const newTab: Tab = { title, component, id, componentMap }
      newTab.history = [newTab.component]

      this.tabs.push(newTab)
    }
  }

  getComponentByName(componentMap, name: string): Type<any> | null {
    return componentMap[name] || null
  }

  navigateTo(hash: number, toComponent: string) {
    const tabIndex = this.tabs.findIndex((tab) => tab.id === hash)
    const tabByIndex = this.tabs[tabIndex]

    const newComponent = this.getComponentByName(tabByIndex.componentMap, toComponent)

    if (newComponent !== tabByIndex.component) {
      this.tabs[tabIndex].history.push(newComponent)
      this.tabs[tabIndex].component = newComponent
    }
  }

  back(hash: number) {
    const tabIndex = this.tabs.findIndex((tab) => tab.id === hash)

    this.tabs[tabIndex].history.pop()

    const historyLength = this.tabs[tabIndex].history.length

    if (historyLength) {
      const last = this.tabs[tabIndex].history[historyLength - 1]
      this.tabs[tabIndex].component = last
    }
  }

  getHash(tab: Tab) {
    return { hash: tab.id }
  }
}
