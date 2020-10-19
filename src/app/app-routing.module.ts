import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { CrudComponent } from './crud/crud.component';
import { EventsComponent } from './events/events.component';
import { ObserveComponent } from './observe/observe.component';
import { PipesPracticeComponent } from './pipes-practice/pipes-practice.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import ('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'binding',
    component: BindingComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'crud',
    component: CrudComponent
  },
  {
    path: 'pipe',
    component: PipesPracticeComponent
  },
  {
    path: 'observe',
    component: ObserveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
