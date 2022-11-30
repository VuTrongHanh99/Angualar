import { Component } from '@angular/core';
import {authors} from 'src/app/authours';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent {
  authors=authors
}
