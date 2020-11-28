import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { CrudComponent } from './crud/crud.component';
import { EventsComponent } from './events/events.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { LocalServerComponent } from './local-server/local-server.component';
import { LoginComponent } from './login/login.component';
import { ObserveComponent } from './observe/observe.component';
import { PipesPracticeComponent } from './pipes-practice/pipes-practice.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { RegisterComponent } from './register/register.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { TwoWayDataComponent } from './two-way-data/two-way-data.component';
import { User2Component } from './user2/user2.component';

const routes: Routes = [
  {
    path: '',
    component: LoginLayoutComponent
  },
  {
    path: 'login',
    component: LoginLayoutComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'user',
    component: UserLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import ('./user/user.module').then(m => m.UserModule)
      },
      {
        path: 'user-list',
        loadChildren: () => import ('./user/user.module').then(m => m.UserModule)
      },
      {
        path: 'binding',
        component: BindingComponent,
        data: {
          breadcrumb: 'Binding'
        }
      },
      {
        path: 'events',
        component: EventsComponent,
        data: {
          breadcrumb: 'Events'
        }
      },
      {
        path: 'crud',
        component: CrudComponent,
        data: {
          breadcrumb: 'Crud'
        }
      },
      {
        path: 'pipe',
        component: PipesPracticeComponent,
        data: {
          breadcrumb: 'Pipe'
        }
      },
      {
        path: 'observe',
        component: ObserveComponent,
        data: {
          breadcrumb: 'Observe'
        }
      },
      {
        path: 'user2',
        component: User2Component,
        data: {
          breadcrumb: 'User 2'
        }
      },
      {
        path: 'template-form',
        component: TemplateDrivenComponent,
        data: {
          breadcrumb: 'Template form'
        }
      },
      {
        path: 'reactive-form',
        component: ReactiveComponent,
        data: {
          breadcrumb: 'Reactive form'
        }
      },
      {
        path: 'two-way-data',
        component: TwoWayDataComponent,
        data: {
          breadcrumb: 'Two way data'
        }
      },
      {
        path: 'json-server',
        component: LocalServerComponent,
        data: {
          breadcrumb: 'Json server'
        }
      }
    ]
    // loadChildren: [
      // {
      //   path: 'user-list',
      //   loadChildren: () => import ('./user/user.module').then(m => m.UserModule)
      // }
      // {
      //   path: 'binding',
      //   component: BindingComponent,
      //   data: {
      //     breadcrumb: 'Binding'
      //   }
      // },
      // {
      //   path: 'events',
      //   component: EventsComponent,
      //   data: {
      //     breadcrumb: 'Events'
      //   }
      // },
      // {
      //   path: 'crud',
      //   component: CrudComponent,
      //   data: {
      //     breadcrumb: 'Crud'
      //   }
      // },
      // {
      //   path: 'pipe',
      //   component: PipesPracticeComponent,
      //   data: {
      //     breadcrumb: 'Pipe'
      //   }
      // },
      // {
      //   path: 'observe',
      //   component: ObserveComponent,
      //   data: {
      //     breadcrumb: 'Observe'
      //   }
      // },
      // {
      //   path: 'user2',
      //   component: User2Component,
      //   data: {
      //     breadcrumb: 'User 2'
      //   }
      // },
      // {
      //   path: 'template-form',
      //   component: TemplateDrivenComponent,
      //   data: {
      //     breadcrumb: 'Template form'
      //   }
      // },
      // {
      //   path: 'reactive-form',
      //   component: ReactiveComponent,
      //   data: {
      //     breadcrumb: 'Reactive form'
      //   }
      // },
      // {
      //   path: 'two-way-data',
      //   component: TwoWayDataComponent,
      //   data: {
      //     breadcrumb: 'Two way data'
      //   }
      // },
      // {
      //   path: 'json-server',
      //   component: LocalServerComponent,
      //   data: {
      //     breadcrumb: 'Json server'
      //   }
      // }
    // ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
