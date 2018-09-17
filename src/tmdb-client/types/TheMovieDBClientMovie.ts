import { OriginalLanguage } from './OriginalLanguage'
import { GenreId } from './GenreId'

export interface TheMovieDBClientMovie {
  vote_count: number
  id: number
  video: boolean
  vote_average: number
  /**
   * Título de la película
   */
  title: string
  popularity: number
  /**
   * Ruta en la que se encuentra el póster
   */
  poster_path: string | null
  original_language: OriginalLanguage
  original_title: string
  genre_ids: GenreId[]
  backdrop_path: string
  adult: boolean
  overview: string
  release_date: string
}
