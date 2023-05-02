import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '../Services/app.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
 
})
export class NavComponent {
 
  changeUser(event:Event){

    let id = + (event.target as  HTMLSelectElement).value
    this.appService.selectedUserId.set(id)   
    this.appService.selectedPost.set(this.appService.selectedUserPost()[0].id) 
    
  }
  constructor(private appService:AppService){

  }
  users= this.appService.allusers
}
