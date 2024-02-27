import { IMovies } from './imovies';
  export interface IMovieDb {
    dates: object;
    page: number;
    results: IMovies[];
    total_pages: number;
    total_results: number;

}
