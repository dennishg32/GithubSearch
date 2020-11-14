export class User {
  constructor(
    public name: string,
    public login: string,
    public location: string,
    public pub_repos: number,
    public followers: number,
    public following: number,
    public avatar_url: string,
    public createdDate: Date
  ) {}
}
