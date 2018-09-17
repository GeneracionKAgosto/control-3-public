import { TheMovieDBClientMovie } from './types/TheMovieDBClientMovie'
import { TheMovieDBClientSearchMoviesResponse } from './types/TheMovieDBClientSearchMoviesResponse'
import { HTTPClient, Fetch } from './HTTPClient'

export class TheMovieDBClient extends HTTPClient {
  private apiKey: string

  constructor(fetch: Fetch) {
    const apiVersion = 3
    super(fetch, `https://api.themoviedb.org/${apiVersion}`)
    this.apiKey = '486d343f9b5ccc40cd5650b69fc70c5e'
  }

  /**
   * Search for movies.
   *
   * Docs URL: https://developers.themoviedb.org/3/search/search-movies
   */
  searchMovies(movieTitle: string): Promise<TheMovieDBClientMovie[]> {
    return this.get('search/movie', {
      api_key: this.apiKey,
      language: 'es-Es',
      query: movieTitle,
      page: 1,
      include_adult: false,
    })
      .then(
        responseBody => responseBody as TheMovieDBClientSearchMoviesResponse,
      )
      .then(searchMoviesResponse => searchMoviesResponse.results)
  }
}
