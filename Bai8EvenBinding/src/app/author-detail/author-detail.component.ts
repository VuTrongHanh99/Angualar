import {  Author } from './../authours';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent {
  @Input() author: Author | undefined
}
