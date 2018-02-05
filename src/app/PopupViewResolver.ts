import { Component, Input, AfterViewInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { PopupDirective } from './popup-directive';
import { PopupHelper }      from './popups/popup-addhelper';
import { PopupInterface } from './popups/PopupInterface';

@Component({
  selector: 'app-popup',
  template: `
              <div class="ad-banner">
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


}