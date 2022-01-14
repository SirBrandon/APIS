import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FootballViewComponent } from './pages/football-view/football-view.component';

import { HttpClientModule } from '@angular/common/http';
import { AddPlayerComponent } from './pages/add-player/add-player.component';
import { UpdatePlayerComponent } from './pages/update-player/update-player.component';
import { DeletePlayerComponent } from './pages/delete-player/delete-player.component';

@NgModule({
  declarations: [
    AppComponent,
    FootballViewComponent,
    AddPlayerComponent,
    UpdatePlayerComponent,
    DeletePlayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
