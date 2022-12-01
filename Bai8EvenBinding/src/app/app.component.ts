import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ToggleComponent } from './toggle/toggle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Tiep Phan';
  checked=true;
  questions = {
    question1: true,
    question2: false
  }

  @ViewChild('chartContainer') container!: ElementRef<HTMLDivElement>;
  @ViewChild(ToggleComponent) toggleComp!: ToggleComponent;
  @ViewChildren(ToggleComponent) toggleList!: QueryList<ToggleComponent>;
  ngAfterViewInit(){
    console.log(this.toggleComp);
    console.log(this.toggleComp);
  }
}
