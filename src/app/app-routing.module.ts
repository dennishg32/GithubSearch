import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReposComponent } from './repos/repos.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'repos', component: ReposComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
