import { Component, OnInit } from '@angular/core';
import { AvengersService, Superheroe } from 'src/app/services/vengadores.service';

@Component({
  selector: 'app-votacion',
  templateUrl: './votacion.component.html',
  styleUrls: ['./votacion.component.css']
})
export class VotacionComponent implements OnInit {


  avengers:Superheroe []=[];
  vengadorOrganizado:Superheroe []=[];

  constructor(private _avengersService:AvengersService) {}

  ngOnInit(): void {

    this.avengers=this._avengersService.getAvengers();
    this.organizarvengadoresGustados();
  }


  private organizarvengadoresGustados(){
    let mayorMeGusta:number=this.avengers[0].me_gusta;
    let mayorNoMeGusta:number=this.avengers[0].no_me_gusta;

    let posi_mayor_megusta:number=0;
    let posi_mayor_no_megusta:number=0;

    for(let i=0; i<this.avengers.length;i++){
      if (this.avengers[i].me_gusta>mayorMeGusta){
          mayorMeGusta=this.avengers[i].me_gusta;
      }
    }

    for(let i=0; i<this.avengers.length;i++){
      if (this.avengers[i].no_me_gusta>mayorNoMeGusta){
        mayorNoMeGusta=this.avengers[i].no_me_gusta;
      }
    }

    for (let index = 0; index < this.avengers.length; index++) {
      if (this.avengers[index].me_gusta==mayorMeGusta) {
        posi_mayor_megusta= index;
      }
      if (this.avengers[index].no_me_gusta==mayorNoMeGusta) {
        posi_mayor_no_megusta= index;
      }
    }


    this.vengadorOrganizado.push(this.avengers[posi_mayor_megusta]);
    this.vengadorOrganizado.push(this.avengers[posi_mayor_no_megusta]);

  }
}
