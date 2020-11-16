import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { BuiltInPipeComponent } from './built-in-pipe/built-in-pipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { UserModule } from './user/user.module';
import { LoginComponent } from './login/login.component';
import { BindingComponent } from './binding/binding.component';
import { EventsComponent } from './events/events.component';
import { CrudComponent } from './crud/crud.component';
import { PipesPracticeComponent } from './pipes-practice/pipes-practice.component';
import { ObserveComponent } from './observe/observe.component';
import { GradePipe } from './pipes/grade.pipe';
import { GenderPipe } from './pipes/gender.pipe';
import { RangePipe } from './pipes/range.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { User2Component } from './user2/user2.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TwoWayDataComponent } from './two-way-data/two-way-data.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    BuiltInPipeComponent,
    TemplateDrivenComponent,
    LoginComponent,
    BindingComponent,
    EventsComponent,
    CrudComponent,
    PipesPracticeComponent,
    ObserveComponent,
    GradePipe,
    GenderPipe,
    RangePipe,
    SearchPipe,
    OrderByPipe,
    User2Component,
    ReactiveComponent,
    TwoWayDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    UserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
