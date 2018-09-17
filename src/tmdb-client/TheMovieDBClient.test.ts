import { TheMovieDBClient } from './TheMovieDBClient'

export function createFetchMock(serverResults: any) {
  return async function(url: string) {
    return {
      async json() {
        if (!url.match(/vengadores/i)) {
          return { results: [] }
        }
        return serverResults
      },
    }
  }
}

describe('TheMovieDBClient', () => {
  it('can search for movies', () => {
    const serverResults = {
      results: [
        { title: 'Los Vengadores' },
        { title: 'Los Vengadores: Infinity War' },
      ],
    }

    const fetchMock = createFetchMock(serverResults)

    const tmdbClient = new TheMovieDBClient(fetchMock)

    expect(tmdbClient.searchMovies('Los Vengadores')).resolves.toEqual(
      serverResults.results,
    )
  })
})
