import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observe',
  templateUrl: './observe.component.html',
  styleUrls: ['./observe.component.scss']
})
export class ObserveComponent implements OnInit {

  constructor() { }
  myobservable = new Observable((movie) => {
    movie.next('scene1');
    movie.next('scene2');
    movie.next('scene3');
    setTimeout(function() {
      movie.next('scene4');
      movie.next('scene5');
      movie.next('scene6');
      movie.complete();
    }, 1000);
  });
  ngOnInit() {
  }
  onObserve() {
    const myObs = this.myobservable.subscribe({
      next(x) {console.log('x', x); },
      error() {console.log('thi is error log'); },
      complete() {console.log('movie completed'); }
    });
    console.log('talk to friend');
    myObs.unsubscribe();
  }
}
