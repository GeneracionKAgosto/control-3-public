export interface MovieView {
  title: string
  posterURL: string
}

export class MovieListView {
  private renderMovie(movie: MovieView) {
    const p = document.createElement('p')
    p.textContent = movie.title

    const img = document.createElement('img')
    img.src = movie.posterURL

    const container = document.createElement('div')
    container.appendChild(p)
    container.appendChild(img)
    container.className = 'movie-list-view__movie'

    return container
  }

  private renderMovies(movies: MovieView[]) {
    const moviesNodesArray = movies.map(movie => this.renderMovie(movie))

    const container = document.createElement('div')
    container.className = 'movie-list-view__movies'

    moviesNodesArray.forEach(movieNode => {
      container.appendChild(movieNode)
    })

    return container
  }

  private cleanElement(moviesNode: HTMLDivElement) {
    while (moviesNode.firstChild) {
      moviesNode.removeChild(moviesNode.firstChild)
    }
  }

  drawMovies(movies: MovieView[]) {
    const movieNodes = this.renderMovies(movies)
    const moviesNode = document.getElementById('movies') as HTMLDivElement

    this.cleanElement(moviesNode)
    moviesNode.appendChild(movieNodes)
  }
}
