import { Component, OnInit, Input, Output, EventEmitter, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabPanelComponent } from '../tab-panel/tab-panel.component';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.css']
})
export class TabGroupComponent implements OnInit, AfterContentInit {

  @Input() tabActiveIndex = 0;
  @Output() tabActiveChange = new EventEmitter<number>();

  @ContentChildren(TabPanelComponent) tabPanelList!: QueryList<TabPanelComponent>

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.tabPanelList.changes.subscribe(() => {
      if (this.tabPanelList.length <= this.tabActiveIndex) {
        this.selectItem(0);
      }
    });
  }

  selectItem(idx: number) {
    this.tabActiveIndex = idx;
    this.tabActiveChange.emit(idx);
  }

}