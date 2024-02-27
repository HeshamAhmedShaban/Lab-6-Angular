import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovies } from '../Models/imovies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  API_Key='fc5d215852ca15ab7d31e555461e4039';

  constructor(private http: HttpClient) { }

  getAllMovies():Observable<any>{
    return this.http.get<any>('https://api.themoviedb.org/3/movie/popular?api_key='+this.API_Key);
  }

  getMovieById(id:number):Observable<any>{
    return this.http.get<any>('https://api.themoviedb.org/3/movie/'+id+'?api_key='+this.API_Key);
  }
}
