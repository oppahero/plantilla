import { Component, Input, Type } from '@angular/core'

interface Tab {
  title: string;
  history: any[]; // For storing navigation history
  component: Type<any>;
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {

  @Input() tab: Tab
  activeTabIndex: number = 0

  openTab(component: Type<any>, title: string) {
    const newTab: Tab = {
      title,
      component,
      history: [component] // Start history with the initial component
    }

    this.tab= newTab
  }

  // canGoBack(): boolean {
  //   return this.tabs[this.activeTabIndex]?.history.length > 1
  // }

  goBack() {
    const currentTab = this.tab.history[this.activeTabIndex]
    if (currentTab.history.length > 1) {
      currentTab.history.pop() // Remove current component
      const previousComponent = currentTab.history[currentTab.history.length - 1]
      currentTab.component = previousComponent // Set to previous component
    }
  }

}
