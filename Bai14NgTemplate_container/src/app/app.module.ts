import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabContainerComponent } from './tab-container/tab-container.component';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { BsTabGroupComponent } from './bs-tab-group/bs-tab-group.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    TabContainerComponent,
    TabGroupComponent,
    BsTabGroupComponent,
    TabPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
