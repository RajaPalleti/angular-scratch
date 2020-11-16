import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {
  public username: string;
  public email: string;
  public phone: string;
  public password: string;
  constructor() { }

  ngOnInit() {
  }
  onFormSubmit(f: NgForm): void {
    if (f.valid) {
      console.log('form Data', f.value);
    }
  }
}
