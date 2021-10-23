import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalPageComponent } from './personal-page/personal-page.component';

const personalRoutes: Routes = [
  {path:'', component:PersonalPageComponent}
]



@NgModule({
  imports: [RouterModule.forChild(personalRoutes)],
  exports: [RouterModule]

})
export class PersonalRoutingModule { }



