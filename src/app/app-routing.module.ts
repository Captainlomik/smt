import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { LotDetailComponent } from './main/components/lot-detail/lot-detail.component';
import { MainPageComponent } from './main/main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent, pathMatch: 'full' },
  { path:'lot/:id', component:LotDetailComponent},
  { path: 'personal', loadChildren: () => import('./personal/personal-area.module').then(a => a.PersonalAreaModule) },
  { path: '**', component: Error404Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
