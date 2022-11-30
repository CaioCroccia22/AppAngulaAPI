import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../bitcoin.service';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})
export class CoinComponent implements OnInit {

  constructor(private bitcoinService: BitcoinService) { }

  ngOnInit() {
    this.bitcoinService.getCoin().subscribe(
      (data) => {
          console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}