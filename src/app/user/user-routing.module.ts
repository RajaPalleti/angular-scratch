import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
const newuser = 'add';
const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
    data: {
      breadcrumb: 'User list'
    }
  },
  {
    path: 'user-list',
    component: UserListComponent,
    data: {
      breadcrumb: 'User list'
    }
  },
  {
    path: 'user/:id',
    component: UserCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
