import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../bitcoin.service';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})
export class CoinComponent implements OnInit {

  constructor(public bitcoinService: BitcoinService) { }

  ngOnInit() {
   this.update();
  }


  update(){
    this.bitcoinService.update();
  }


  getCurrentPrice(){
    return this.bitcoinService.currentPrice;
  }

  


}