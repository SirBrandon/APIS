import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardViewComponent } from './pages/dashboard-view/dashboard-view.component';
import { NewProfileComponent } from './pages/new-profile/new-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardViewComponent,
    NewProfileComponent
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
