import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalAreaModule } from './personal/personal-area.module';
import { Error404Component } from './error404/error404.component';
import { MainPageComponent } from './main/main-page/main-page.component';
import { HeaderComponent } from './main/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    MainPageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonalAreaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
