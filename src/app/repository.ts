export class Repository {
  constructor(
    public url: string,
    public description: string,
    public language: string,
    public html_url: string,
    public updated_at: Date
  ){}
}
