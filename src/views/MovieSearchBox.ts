type SubmitFormHandler = (movieTitle: string) => any

export class MovieSearchBox {
  protected onSubmitFormHandler: SubmitFormHandler
  private isSubscribed: boolean

  constructor() {
    this.onSubmitFormHandler = () => {}
    this.isSubscribed = false
  }

  subscribe(onSubmitFormHandler: SubmitFormHandler) {
    this.onSubmitFormHandler = onSubmitFormHandler

    if (!this.isSubscribed) {
      this.isSubscribed = true
      this.subscribeToForm()
    }
  }

  protected subscribeToForm() {
    const form = document.getElementById('search-form') as HTMLFormElement

    form.addEventListener('submit', e => {
      e.preventDefault()
      this.onSubmitReceived()
    })
  }

  private getMovieTitle() {
    const input = document.getElementById('movie-title') as HTMLInputElement
    return input.value
  }

  private onSubmitReceived() {
    const movieTitle = this.getMovieTitle()
    this.onSubmitFormHandler(movieTitle)
  }
}
