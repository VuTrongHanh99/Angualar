import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {
  now = '2020-06-24T09:00:00.000Z';
  userId = "4321245";
  userIdChangeAfterFiveSeconds = "14324";
  users: User[] = [
    {
      name: "Tiep Phan",
      age: 30
    },
    {
      name: "Trung Vo",
      age: 28
    },
    {
      name: "Chau Tran",
      age: 29
    },
    {
      name: "Tuan Anh",
      age: 16
    }
  ];


  newUser: User;

  constructor() {
    this.newUser = new User();
  }

  ngOnInit() {    
  }

  addUser() {
    this.users.push(this.newUser);
    this.newUser = new User();
  }

  addUserByUpdateReference() {
    this.users = [...this.users, this.newUser];
    this.newUser = new User();
  }
}
