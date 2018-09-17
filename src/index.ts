import { MovieSearchBox } from './views/MovieSearchBox'
import { MovieListView } from './views/MovieListView'
import { TheMovieDBClient } from './tmdb-client/TheMovieDBClient'
import { MoviesController } from './controllers/MoviesController'

const movieSearchBoxMock = new MovieSearchBox()
const movieListViewMock = new MovieListView()
const tmdbClient = new TheMovieDBClient(fetch.bind(window))

const movieController = new MoviesController(
  tmdbClient,
  movieSearchBoxMock,
  movieListViewMock,
)

movieController.initialize()
