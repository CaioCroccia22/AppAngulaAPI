import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { CoinComponent } from './coin/coin.component';

@NgModule({

  imports:      [ 
    BrowserModule, 
    FormsModule, 
    RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'coin', component: CoinComponent },
  ]),
],
  declarations: [ AppComponent, HelloComponent, HomeComponent, CoinComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
