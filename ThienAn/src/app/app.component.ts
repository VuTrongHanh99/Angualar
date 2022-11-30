import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ThienAn';
  userObj = {
    name: 'Vu Hanh',
    age: 24,
  };
  showInfo() {
    alert(`Chào bạn:`+this.userObj.name);
  }
}
