import { Injectable } from '@angular/core';
import { Repository } from '../repository';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  findUser: User;
  repos: Repository;

  constructor(private http: HttpClient) {
    this.findUser = new User('', '', '', 0, 0, 0, '', new Date());
    this.repos = new Repository('', '', '', '', new Date());
  }

  searchUser(searchUsername: string) {
    interface apiResponse {
      name: string;
      login: string;
      location: string;
      public_repos: number;
      followers: number;
      following: number;
      avatar_url: string;
      created_at: Date;
    }
    return new Promise((resolve, reject) => {
      this.http
        .get<apiResponse>(
          'https://api.github.com/users/' +
            searchUsername +
            '?access_token=' +
            environment.apiKey
        )
        .toPromise()
        .then(
          (response) => {
            this.findUser = response;
            console.log(this.findUser);
            resolve();
          },
          (err) => {
            console.log(err);
            reject();
          }
        );
    });
  }

  getRepository(searchRepo: string) {
    interface apiResponse {
      name: string;
      description: string;
      language: string;
      html_url: string;
      updated_at: Date;
    }

    return new Promise((resolve, reject) => {
      this.http
        .get<apiResponse>(
          'https://api.github.com/users/' +
            searchRepo +
            '/repos?order=created&sort=asc?access_token=' +
            environment.apiKey
        )
        .toPromise()
        .then(
          (response) => {
            this.repos = response;
            console.log(this.repos);
            resolve();
          },
          (err) => {
            console.log(err);
            reject();
          }
        );
    });
  }
}
