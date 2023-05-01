import { HttpClient } from '@angular/common/http';
import { Injectable, computed, signal } from '@angular/core';
import { Comments, Post, User } from '../Interfaces';
import {toObservable,toSignal} from '@angular/core/rxjs-interop'
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }
  
  private $posts = this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
  private $comments= this.http.get<Comments[]>("https://jsonplaceholder.typicode.com/comments")
  private  $users= this.http.get<User[]>("https://jsonplaceholder.typicode.com/users")


  //signals

  selectedUserId= signal<number>(1)
  selectedPost=signal<number>(1)


  allusers=toSignal<User[], User[]>(this.$users, {initialValue:[]})
  allPosts= toSignal<Post[], Post[]>(this.$posts, {initialValue:[]})
  allcomments = toSignal<Comments[], Comments[]>(this.$comments, {initialValue:[]})

  
  selectedUserPost=computed(()=> this.allPosts().filter(x=>x.userId === this.selectedUserId()))
  selectedPostcomments= computed(()=>this.allcomments().filter(c=>c.postId ===this.selectedPost()))
  
}
