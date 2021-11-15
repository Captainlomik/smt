import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }   from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { PersonalAreaModule } from './personal/personal-area.module';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Error404Component } from './error404/error404.component';
import { MainPageComponent } from './main/main-page/main-page.component';
import { HeaderComponent } from './main/header/header.component';
import { LotDetailComponent } from './main/components/lot-detail/lot-detail.component';
import { MainSearchPipe } from './shared/Pipes/main-search.pipe';
import { SortPipe } from './shared/Pipes/sort.pipe';
import { CategoryFilterComponent } from './main/components/category-filter/category-filter.component';


@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    MainPageComponent,
    HeaderComponent,
    LotDetailComponent,
    MainSearchPipe,
    SortPipe,
    CategoryFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonalAreaModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
