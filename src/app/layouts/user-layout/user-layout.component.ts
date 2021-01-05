import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit {
  public menu = [];
  public breadcrumbs = [];
  title = 'angular-scratch';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    const events = this.router.events;
    console.log('events', events);
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(map((route) => {
        while (route.firstChild) { route = route.firstChild; }
        return route;
      }))
      .pipe(filter(route => route.outlet === PRIMARY_OUTLET))
      .subscribe(route => {

        const snapshot = this.router.routerState.snapshot;
        this.breadcrumbs = [];
        const url = snapshot.url;
        const routeData = route.snapshot.data;

        console.log(routeData);
        const label = routeData['breadcrumb'];
        const params = snapshot.root.params;

        this.breadcrumbs.push({
          url: url,
          label: label,
          params: params
        });
        console.log('', this.breadcrumbs);
      });
      this.menu = [
        {
          name: 'User list',
          url: 'user-list'
        },
        {
          name: 'Binding',
          url: 'binding'
        },
        {
          name: 'Events',
          url: 'events'
        },
        {
          name: 'Crud',
          url: 'crud'
        },
        {
          name: 'Pipe',
          url: 'pipe'
        },
        {
          name: 'Observe',
          url: 'observe'
        },
        {
          name: 'User2',
          url: 'user2'
        },
        {
          name: 'Template form',
          url: 'template-form'
        },
        {
          name: 'Reactive form',
          url: 'reactive-form'
        },
        {
          name: 'Two way data',
          url: 'two-way-data'
        },
        {
          name: 'Json server',
          url: 'json-server'
        }
      ];
  }
  logout(){
    localStorage.removeItem('userDetails');
    this.router.navigate(['login']);
  }
}
