import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResult, MovieResult } from './interface';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = environment.apikey;

@Injectable({
  providedIn: 'root'
})
export class MovieService {

private http = inject(HttpClient);

  constructor() { }
getTopRatedmovie(page = 1) : Observable<ApiResult>{
  return this.http.get<ApiResult>(`${BASE_URL}/movie/popular?page=${page}&api_key=${API_KEY}`)
 // .pipe(delay(5000));
}
getMovieDetails(id: String) : Observable<MovieResult>{

  return this.http.get<MovieResult>(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
}
}
