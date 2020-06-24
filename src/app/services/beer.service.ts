import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private apiService: ApiService) { }

  async getAll(count: number){
    const data = await this.apiService.get('beers', count);
    return data;
  }
  
}
