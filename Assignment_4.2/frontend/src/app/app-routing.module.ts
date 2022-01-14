import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlayerComponent } from './pages/add-player/add-player.component';
import { DeletePlayerComponent } from './pages/delete-player/delete-player.component';
import { FootballViewComponent } from './pages/football-view/football-view.component';
import { UpdatePlayerComponent } from './pages/update-player/update-player.component';

const routes: Routes = [
  { path: '', component: FootballViewComponent },
  { path: 'add-player', component: AddPlayerComponent },
  { path: 'update-player', component: UpdatePlayerComponent },
  { path: 'delete-player', component: DeletePlayerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
