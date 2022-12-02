import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'tab-container',
  template: `
  <nav class="navbar navbar-expand-lg navbar-light bg-light mx-4 my-2">
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item" *ngFor="let item of navs">
        <a class="nav-link" href="#">
        <ng-container *ngIf="headerTemplate;else noTemplate">
        <ng-container *ngTemplateOutlet="headerTemplate; context:{ $implicit: item}" 
        >
        </ng-container>
        </ng-container>
        <ng-template #noTemplate>{{item}}</ng-template>
        </a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
  </nav>
  `,
})
export class TabContainerComponent {
  @Input() navs!: string[]; 
  // Custom template provided by parent
  @Input() headerTemplate!: TemplateRef<any>; // Custom template provided by parent

}
