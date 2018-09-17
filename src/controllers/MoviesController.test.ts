import { MovieSearchBox } from '../views/MovieSearchBox'
import { TheMovieDBClient } from '../tmdb-client/TheMovieDBClient'
import { createFetchMock } from '../tmdb-client/TheMovieDBClient.test'
import { MovieListView, MovieView } from '../views/MovieListView'
import { MoviesController } from './MoviesController'

class MovieSearchBoxMock extends MovieSearchBox {
  public someOneIsSubscribed: boolean

  constructor() {
    super()
    this.someOneIsSubscribed = false
  }

  launchEvent(movieTitle: string) {
    return this.onSubmitFormHandler(movieTitle)
  }

  subscribeToForm() {
    this.someOneIsSubscribed = true
  }
}

class MovieListViewMock extends MovieListView {
  public calledWith: any

  constructor() {
    super()
    this.calledWith = null
  }

  drawMovies(movies: MovieView[]) {
    this.calledWith = movies
  }
}

describe('TheMovieDBClient', () => {
  it('can search for movies', async () => {
    const serverResults = {
      results: [
        { title: 'Los Vengadores', poster_path: '/avengers.jpg' },
        {
          title: 'Los Vengadores: Infinity War',
          poster_path: '/avengers-infinity.jpg',
        },
      ],
    }

    const movieSearchBoxMock = new MovieSearchBoxMock()
    const movieListViewMock = new MovieListViewMock()
    const tmdbClient = new TheMovieDBClient(createFetchMock(serverResults))

    const movieController = new MoviesController(
      tmdbClient,
      movieSearchBoxMock,
      movieListViewMock,
    )
    movieController.initialize()
    expect(movieSearchBoxMock.someOneIsSubscribed).toBe(true)

    await movieSearchBoxMock.launchEvent('Los Vengadores')

    expect(movieListViewMock.calledWith).toEqual([
      {
        title: 'Los Vengadores',
        posterURL: 'https://image.tmdb.org/t/p/w1280/avengers.jpg',
      },
      {
        title: 'Los Vengadores: Infinity War',
        posterURL: 'https://image.tmdb.org/t/p/w1280/avengers-infinity.jpg',
      },
    ])
  })
})
