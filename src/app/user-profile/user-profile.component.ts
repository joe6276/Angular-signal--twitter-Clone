import { Component, OnInit, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '../Services/app.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent  {
  
  constructor(private appService:AppService){ }
  users=this.appService.allusers
  selectedId= this.appService.selectedUserId
  selectedUser=computed(()=> this.users().find(x=>x.id===this.selectedId()))
}
