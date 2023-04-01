import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  
  httpOptions: any
  api_url = "https://rickandmortyapi.com/api"

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type': 'aplication/json'
      })
    }
   }

   getAllCharacters(){
    return new Promise(resolve => {
      this.http.get(this.api_url+'/character',this.httpOptions).subscribe(res => {
        console.log(res);
        resolve(res);
      }, err=> {
        console.log(err)
      })
    })
  }
}
