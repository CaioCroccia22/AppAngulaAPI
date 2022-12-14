import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { CoinComponent } from './coin/coin.component';
import { HttpClientModule } from '@angular/common/http';
import { BitcoinService } from './bitcoin.service';

@NgModule({

  imports:      [ 
    BrowserModule, 
    HttpClientModule,
    FormsModule, 
    RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'coin', component: CoinComponent },
  ]),
],
  declarations: [ AppComponent, HelloComponent, HomeComponent, CoinComponent ],
  bootstrap:    [ AppComponent ],
  providers: [BitcoinService]
})
export class AppModule { }
