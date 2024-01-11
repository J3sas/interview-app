import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { IndexPageComponent } from './components/index-page/index-page.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'home', component: IndexPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
