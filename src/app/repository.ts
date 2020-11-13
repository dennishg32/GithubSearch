export class Repository {
  constructor(
    public url: string,
    public language: string,
    public description: string,
    public html_url: string,
    public updated_at: Date
  ){}
}
