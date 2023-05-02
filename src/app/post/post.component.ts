import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppService } from '../Services/app.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './post.component.html',
 
})
export class PostComponent {
  
  constructor(private appService:AppService){}
  selectedUser=computed(()=> this.appService.allusers().find(x=>x.id===this.appService.selectedUserId()))
  selectedUserPost= this.appService.selectedUserPost
  changeComments(id:number){
    this.appService.selectedPost.set(id)
  }
}
