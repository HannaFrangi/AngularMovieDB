import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, InfiniteScrollCustomEvent ,IonRefresher, IonRefresherContent, IonList , IonItem , IonAvatar ,IonSkeletonText, IonAlert,IonBadge , IonLabel ,IonInfiniteScroll, IonInfiniteScrollContent , IonIcon } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie.service';
import { catchError, delay, finalize, from } from 'rxjs';
import { MovieResult } from '../services/interface';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent , IonList, IonItem , IonAvatar , IonRefresher, IonRefresherContent, IonSkeletonText ,IonAlert , IonLabel, IonBadge, DatePipe , RouterModule , IonInfiniteScroll , IonInfiniteScrollContent, IonIcon]
})
export class HomePage {
  public movieService = inject(MovieService);
  public currentPage = 1;
  public error = null;
  public isloading = false;
  public movies: MovieResult[] =[];
  public imageBaseUrl = 'https://image.tmdb.org/t/p';
  public dummyArray = new Array(15);
  constructor() {
    this.loadMovies();
  }
  doRefresh(event: { target: { complete: () => void; }; }) {
    console.log('Begin async operation');
    this.isloading = true;
    setTimeout(() => {
      console.log('Async operation has ended');
      this.loadMovies();
      this.isloading = false;
      event.target.complete();
    }, 1000);
  }

loadMovies(event?: InfiniteScrollCustomEvent){
  this.error = null;
if (!event){
  this.isloading = true;
}
this.movieService.getTopRatedmovie(this.currentPage).pipe(finalize(() => {
this.isloading = false;
if (event) {
  event.target.complete();
}
}) , catchError((err : any) => {
console.log(err);

  this.error = err.error.status_message;
return [] ;
} )).subscribe({
next: (res) => {
  console.log(res);
  this.movies.push(...res.results);
  if (event) {
    event.target.disabled = res.total_pages === this.currentPage;
  }
}

});
}
loadMore(event: InfiniteScrollCustomEvent) {
  this.currentPage++;
  this.loadMovies(event);
}
}
