import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { AlbumModel } from "../models/album.model";
import {Injectable} from "@angular/core";

@Injectable()
class AlbumsService {
    private url:string="https://jsonplaceholder.typicode.com/albums";

    constructor(private http: HttpClient){}

    getAlbumsList():Observable<AlbumModel[]>{
        return this.http.get<AlbumModel[]>(this.url);
    }
}
export default AlbumsService;