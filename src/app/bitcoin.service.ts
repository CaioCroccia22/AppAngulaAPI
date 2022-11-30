import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class BitcoinService {

  SERVER_URL = "https://api.coindesk.com/v1/bpi/currentprice.json"

  constructor(private http: HttpClient) {}

  public getCoin(){
    return this.http.get(`${this.SERVER_URL}/`)
  }
 }