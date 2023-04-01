import { Component, OnInit } from '@angular/core'; 
import { RickAndMortyService } from '../services/rick-and-morty.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  allCharacters: any;

  constructor(
    private servicioRM: RickAndMortyService
  ) {}

  ngOnInit(){
    this.servicioRM.getAllCharacters().then((res: any) => {
      this.allCharacters = res;
      console.log (this.allCharacters);
    })
  }

}
