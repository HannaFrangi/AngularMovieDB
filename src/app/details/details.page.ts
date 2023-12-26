import { Component, inject, Input, OnInit, signal, WritableSignal } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent , IonList , IonItem , IonAvatar ,IonSkeletonText, IonAlert,IonBadge  ,IonButton, IonLabel ,IonInfiniteScroll, IonInfiniteScrollContent, IonBackButton, IonButtons,IonCard , IonCardTitle , IonCardSubtitle ,IonText , IonCardHeader , IonCardContent,IonIcon  } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie.service';
import { MovieResult } from '../services/interface';
import {cashOutline , calendarOutline , peopleCircleOutline , earthOutline, alertCircleOutline}  from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent , IonList, IonItem , IonAvatar ,IonSkeletonText ,IonAlert , IonLabel,IonButton, IonBadge, DatePipe , RouterModule , IonInfiniteScroll , IonInfiniteScrollContent , CurrencyPipe , IonBackButton , IonButtons,IonCard , IonCardTitle  , IonCardSubtitle , IonText , IonCardHeader , IonCardContent , IonIcon ] 
})
export class DetailsPage implements OnInit {
private movieService = inject(MovieService);
public imageBaseUrl = 'https://image.tmdb.org/t/p';
public movie: WritableSignal<MovieResult | null>  = signal(null);


@Input()
set id(movieId : String){
  this.movieService.getMovieDetails(movieId).subscribe((movie) =>{
    console.log(movie);
this.movie.set(movie);
});
}

  constructor() { 
    addIcons({cashOutline , calendarOutline , peopleCircleOutline , earthOutline , alertCircleOutline})
  }

  ngOnInit() {}
}
