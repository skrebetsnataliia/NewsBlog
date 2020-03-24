import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from 'src/modules/login/login.module';
import { HomeModule } from 'src/modules/home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { ProfileModule } from 'src/modules/profile/profile.module';
import { NewsModule } from 'src/modules/news/news.module';
import { MainModule } from 'src/modules/main/main.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HomeModule,
    HttpClientModule,
    ProfileModule,
    NewsModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
