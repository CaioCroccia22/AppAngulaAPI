import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface Response {
  time: {
    update: string;
  };
  disclaimer: string;
  bpi : {
    [ key in 'USD' | 'BRL']:{
      code: string;
      rate: number;
      description: string;
      rate_float: number;
    };
  }
}

  interface PriceUpdate {
    timestamp: Date;
    USD: number;
    BRL: number;
  }


@Injectable()
export class BitcoinService {
  lastUpdate: Date
  currentPrice: Response
  updateList: Array <PriceUpdate> = []

 

  constructor(private http: HttpClient) {}


  /*
Isso envia uma solicitação HTTP GET para a API para obter uma lista de pacotes que pertencem ao @angularescopo e, em seguida, atribui o totalretornado na resposta à propriedade local totalAngularPackages. O tipo de response é definido para <any>lidar com quaisquer propriedades retornadas na resposta.
  */
update() {
  this.http.get<Response>('https://api.coindesk.com/v1/bpi/currentprice/BRL.json')
  .subscribe(data => {
    this.lastUpdate = new Date();
    this.currentPrice = data;
    this.updateList.push({
      timestamp: this.lastUpdate,
      USD: this.currentPrice.bpi.USD.rate_float,
      BRL: this.currentPrice.bpi.BRL.rate_float,
    });
  });
}
    /*
    Solicitação GET com resposta fortemente tipada
    Isso envia a mesma solicitação acima, mas define o tipo de resposta para uma SearchResultsinterface personalizada que define as propriedades de resposta esperadas.
    */ 

    //https://jasonwatmore.com/post/2019/09/06/angular-http-get-request-examples
  }
 