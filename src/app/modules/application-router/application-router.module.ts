import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "../../app.component";
import { HomeComponent } from 'src/app/pages/home/home.component';
import { PostsComponent } from 'src/app/pages/posts/posts.component';
import { AlbumComponent } from 'src/app/pages/album/album.component';

export enum RouteNames{
  home="",
  posts="posts",
  album="album"
}

const applicationRoutes:Routes=[
  {path:RouteNames.home, component:HomeComponent},
  {path: RouteNames.posts, component: PostsComponent},
  {path: RouteNames.album, component: AlbumComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(applicationRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class ApplicationRouterModule { }
