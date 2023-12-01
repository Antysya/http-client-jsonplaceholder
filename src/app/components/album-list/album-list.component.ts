import { Component } from '@angular/core';
import { AlbumModel } from 'src/app/models/album.model';
import AlbumsService from 'src/app/services/albums.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent {
  albums: AlbumModel[] =[];
  constructor(private AlbumsService: AlbumsService){

  }
  getAlbums(): void {
    this.AlbumsService.getAlbumsList().subscribe((p: AlbumModel[]) => {
      this.albums = p;
    });
  }
}
