import { Component, OnInit, ViewChild } from '@angular/core';
import { PartiesServiceService } from '../shared/parties-service.service';

@Component({
  selector: 'app-parties-component',
  templateUrl: './parties-component.component.html',
  styleUrls: ['./parties-component.component.css']
})
export class PartiesComponentComponent implements OnInit {
  parties: any = [];
  div1:boolean=false;
  selectedID : number = 0;
  @ViewChild('nombre') input:any; 
  @ViewChild('nbr_dispo') span:any; 
  nbr_dispo: number = 0;

  constructor(public PartiesServices: PartiesServiceService) { }

  ngOnInit() {
    this.PartiesServices.getParties()
      .subscribe(res => {this.parties = res;
        console.log("res",res);
      });
  }
  getColor(nbplaces: number) { 

      if (nbplaces >0 && nbplaces <40)
        return 'orange';
      else if (nbplaces > 40 && nbplaces <100) 
        return 'green';
      else 
        return 'yellow';

  }
  div1Function(id :number){
    this.selectedID = id

  }
  decrementPlace(id:number, nb_place_disponible:number){
    var nb_place = this.input.nativeElement.value;
   var  nb_place_restant = nb_place_disponible - nb_place;
   document.getElementById("span"+id)!.innerHTML=String(nb_place_restant);
  }

}
