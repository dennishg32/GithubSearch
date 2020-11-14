import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github-service/github.service';
import { Repository } from '../repository';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css'],
})
export class ReposComponent implements OnInit {
  rep: Repository;

  reposearch(engineSearch) {
    this.searchRepo.getRepository(engineSearch).then(
      (grant) => {
        this.rep = this.searchRepo.repos;
        console.log(this.rep);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  constructor(public searchRepo: GithubService) {}
  ngOnInit(): void {
    this.reposearch('dennishg32');
  }
}
