export type Fetch = (
  url: string,
) => Promise<{
  json: () => Promise<any>
}>

export class HTTPClient {
  private myFetch: Fetch
  private baseURL: string

  constructor(fetch: Fetch, baseURL: string) {
    this.myFetch = fetch
    this.baseURL = baseURL
  }

  private createQueryString(object: any) {
    return Object.keys(object)
      .map(key => `${key}=${object[key]}`)
      .join('&')
  }

  protected get(requestPath: string, params: any) {
    const qs = this.createQueryString(params)
    const url = `${this.baseURL}/${requestPath}?${qs}`
    return this.myFetch(url).then(response => response.json())
  }
}
