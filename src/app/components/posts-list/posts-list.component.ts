import { Component } from '@angular/core';
import { PostModel } from 'src/app/models/post.model';
import PostsService from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent {
  posts: PostModel[] =[];
  constructor(private postsService: PostsService){

  }
  getPosts(): void {
    this.postsService.getPostsList().subscribe(p => this.posts = p);
  }
}
