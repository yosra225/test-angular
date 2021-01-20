import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PartiesServiceService {

  constructor(private httpService: HttpClient) {

   }
   getParties() {
    return this.httpService.get('../../assets/parties.json');
  }
}
