import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { HttpClientModule } from '@angular/common/http';
import PostsService from './services/posts.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterLink } from '@angular/router';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { HeaderComponent } from './components/header/header.component';
import {MatCardModule} from '@angular/material/card';
import { ApplicationRouterModule } from './modules/application-router/application-router.module';
import { HomeComponent } from './pages/home/home.component';
import { PostsComponent } from './pages/posts/posts.component';
import { AlbumComponent } from './pages/album/album.component';
import AlbumsService from './services/albums.service';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    HeaderComponent,
    AlbumListComponent,
    HomeComponent,
    PostsComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    ApplicationRouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterLink,
    MatCardModule
  ],
  providers: [PostsService, AlbumsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

