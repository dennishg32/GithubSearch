import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { User } from '../user';
import { GithubService } from '../github-service/github.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;
  repos: Repository;

  constructor(public http: HttpClient, private ssearch: GithubService) { }

  makeSearch(name) {
    this.ssearch.searchUser(name).then(
      (grant) => {
        this.user = this.ssearch.findUser;
        console.log(this.user);
      },
      (error) => {
        console.log(error);
      }
    );
    this.ssearch.getRepository(name).then(
      (grant) => {
        this.repos = this.ssearch.repos;
        console.log(this.repos);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  ngOnInit(): void {
    this.makeSearch('dennishg32');
  }
}