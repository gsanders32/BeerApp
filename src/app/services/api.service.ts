import { Injectable } from '@angular/core';
import { IBeer } from '../interfaces/ibeer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  url = 'https://api.punkapi.com/v2/';

  async get(path, numb?){
    let count: number;
    if (numb === undefined){
      count = 40;
    } else{
      count = numb;
    }
    return await this.httpClient.get<IBeer[]>(this.url + path + '?per_page=' + count).toPromise();
  }
}
