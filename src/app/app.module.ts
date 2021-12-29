import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryDataService } from './core/http/in-memory-data-service/in-memory-data-service';
import { StateService } from './core/state/state.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 }),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
