import { MovieSearchBox } from '../views/MovieSearchBox'
import { MovieListView, MovieView } from '../views/MovieListView'
import { TheMovieDBClient } from '../tmdb-client/TheMovieDBClient'
import { TheMovieDBClientMovie } from '../tmdb-client/types/TheMovieDBClientMovie'

export class MoviesController {
  private movieSearchBox: MovieSearchBox
  private movieListView: MovieListView
  private theMovieDBClient: TheMovieDBClient
  private defaultPoster: string

  constructor(
    theMovieDBClient: TheMovieDBClient,
    movieSearchBox: MovieSearchBox,
    movieListView: MovieListView,
  ) {
    this.theMovieDBClient = theMovieDBClient
    this.movieSearchBox = movieSearchBox
    this.movieListView = movieListView

    this.defaultPoster =
      'https://www.visualfriends.com/wp-content/uploads/2017/12/question-mark-poster-template.png'
  }

  initialize() {
    this.movieSearchBox.subscribe(async movieTitle => {
      const clientMovies = await this.theMovieDBClient.searchMovies(movieTitle)
      const viewMovies = clientMovies.map(clientMovie =>
        this.fromMovieClientToMovieView(clientMovie),
      )

      this.movieListView.drawMovies(viewMovies)
    })
  }

  fromMovieClientToMovieView(movie: TheMovieDBClientMovie): MovieView {
    return {
      title: movie.title,
      posterURL: movie.poster_path
        ? this.prefixWithUrl(movie.poster_path)
        : this.defaultPoster,
    }
  }

  prefixWithUrl(posterPath: string) {
    return `https://image.tmdb.org/t/p/w1280${posterPath}`
  }
}
