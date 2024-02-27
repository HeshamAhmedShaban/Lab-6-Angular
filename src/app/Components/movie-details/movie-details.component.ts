import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IMovies } from '../../Models/imovies';
import { MoviesService } from '../../Services/movies.service';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent implements OnInit {

oneMovies:any;
url='http://image.tmdb.org/t/p/w500/';

constructor(private movieService:MoviesService,private route:ActivatedRoute){}

ngOnInit(): void {
  let id:number= Number(this.route.snapshot.paramMap.get('id')!);

this.movieService.getMovieById(id).subscribe({
  next:(data)=>this.oneMovies=data
})

}

}
