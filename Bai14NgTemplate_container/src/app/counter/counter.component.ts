import { Component, OnInit } from '@angular/core';
let id = 1;
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  id = id++;
  constructor() { }

  ngOnInit() {
  }

}