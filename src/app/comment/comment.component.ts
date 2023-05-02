import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '../Services/app.service';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  constructor(private appService:AppService){}

  comments = this.appService.selectedPostcomments
  selectedPost= this.appService.selectedPost
}
