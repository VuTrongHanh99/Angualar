import { Component, OnInit, OnDestroy, Input, ViewChild, TemplateRef, ContentChild } from '@angular/core';
import { TabGroupComponent } from '../tab-group/tab-group.component';
import { TabPanelContentDirective } from '../tab-panel-content.directive';

@Component({
  selector: 'app-tab-panel',
  template: `
<ng-template>
  <ng-content></ng-content>
</ng-template>
  `,
  styles: ['']
})
export class TabPanelComponent {
  @Input() title!: string;
  @ViewChild(TemplateRef, {static: true}) implicitBody!: TemplateRef<unknown>;

  @ContentChild(TabPanelContentDirective, {static: true, read: TemplateRef}) explicitBody!: TemplateRef<unknown>;

  get panelBody(): TemplateRef<unknown> {
    return this.explicitBody || this.implicitBody;
  }

}