import { Injectable } from '@angular/core';
import { Repository } from '../repository';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  findUser: User;
  repos: Repository;

  constructor(private http: HttpClient) {
    this.findUser = new User('', '', '', 0, 0, 0, '', new Date());
    this.repos = new Repository('', '', '', '', new Date());
   }
}
