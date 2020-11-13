export class User {
  constructor(
    public url: string,
    public html_url: string,
    public login: string,
    public location: string,
    public pub_repos: number,
    public following: number,
    public followers: number,
    public createdDate: Date,
    public avatar_url: string
  ){}
}
