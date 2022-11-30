import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class BitcoinService {

  SERVER_URL = "https://api.coindesk.com/v1/bpi/currentprice.json"

  constructor(private http: HttpClient) {}


  /*
Isso envia uma solicitação HTTP GET para a API para obter uma lista de pacotes que pertencem ao @angularescopo e, em seguida, atribui o totalretornado na resposta à propriedade local totalAngularPackages. O tipo de response é definido para <any>lidar com quaisquer propriedades retornadas na resposta.
  */
  public getCoin(){
    return this.http.get<any>('https://api.coindesk.com/v1/bpi/currentprice.json').subscribe

    /*
    Solicitação GET com resposta fortemente tipada
    Isso envia a mesma solicitação acima, mas define o tipo de resposta para uma SearchResultsinterface personalizada que define as propriedades de resposta esperadas.
    */ 

    //https://jasonwatmore.com/post/2019/09/06/angular-http-get-request-examples
  }
 }