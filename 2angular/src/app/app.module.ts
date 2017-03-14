import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import{ VrComponent } from './vrplayer/vrplayer.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import {Service} from "./service";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DashboardComponent,
    HomeComponent,
    VrComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    Service
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
