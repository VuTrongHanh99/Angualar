import { Component } from '@angular/core';
@Component({
  selector: 'app-hello',
  template: ` 
    <h2>Hello there!</h2>
    <h3>Your name: {{ user.name }}</h3>
    <p>Your name: {{ user.age }}</p>
    <br/>
    <button (click)="showInfo()">Click me!</button>
   `,
})
export class HelloComponent {
    user = {
        name: 'Tiep Phan',
        age: 30,
      };
    showInfo() {
        alert('Wellcom to THIENAN');
      }
}