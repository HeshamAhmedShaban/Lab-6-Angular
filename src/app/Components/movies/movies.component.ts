import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../Services/movies.service';
import { IMovies } from '../../Models/imovies';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IMovieDb } from '../../Models/imovieDb';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent implements OnInit {

  allMovies:IMovies[]=[]
url='http://image.tmdb.org/t/p/w500/';
  constructor(private movieService:MoviesService) { }

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe({
    next:(data:IMovieDb)=>{
    this.allMovies = data.results;
    }
    })
      }
  }
