import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FootballViewComponent } from './pages/football-view/football-view.component';

const routes: Routes = [
  { path: '', component: FootballViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
