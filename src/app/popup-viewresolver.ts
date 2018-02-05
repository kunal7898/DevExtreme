import { Component, Input, AfterViewInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { PopupDirective } from './popup-directive';
import { PopupHelper }      from './popups/popup-addhelper';
import { PopupInterface } from './popups/popup-interface';

@Component({
  selector: 'app-popup',
  template: `
              <div class="ad-banner">
                <h3>Advertisements</h3>
                <ng-template popup-host></ng-template>
              </div>
            `
})
export class PopupViewResolver implements AfterViewInit, OnDestroy {
  @Input() ads: PopupHelper[];
  currentAddIndex: number = -1;
  @ViewChild(PopupDirective) adHost: PopupDirective;
  subscription: any;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit() {
    this.loadComponent();
    this.getAds();
    
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAddIndex = (this.currentAddIndex + 1) % this.ads.length;
    let adItem = this.ads[this.currentAddIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<PopupInterface>componentRef.instance).data = adItem.data;
  }


  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
 
}
