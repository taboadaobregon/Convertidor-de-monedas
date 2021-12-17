import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {

  cantidad = 0;
  tengo = 'USD';
  quiero = 'EUR';
  total = 0;

  monedas : string[] = ['USD','EUR','SOL'];

  constructor() { }

  ngOnInit(): void {
  }


  convertir():void{
    switch(this.tengo)
    { 
      case 'USD':
        if(this.quiero === 'USD'){
          this.total = this.cantidad;
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad * 0.89;
        }
        if(this.quiero === 'SOL'){
          this.total = this.cantidad * 4.05;
        }
      break;

      case 'EUR':
      //algo
        if(this.quiero === 'USD'){
          this.total = this.cantidad * 1.13;
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad;
        }
        if(this.quiero === 'SOL'){
          this.total = this.cantidad * 4.56;
        }

      break;

      case 'SOL':

        if(this.quiero === 'USD'){
          this.total = this.cantidad * 0.25;
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad * 0.22 ;
        }
        if(this.quiero === 'SOL'){
          this.total = this.cantidad;
        }
      
      break;
      
    }
  }
}
