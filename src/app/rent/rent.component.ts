import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css'],
})
export class RentComponent implements OnInit {

  rentDate: NgbDateStruct;
  date: {year: number, month: number};

  activeQuote: boolean = false;

  currentMachine: Object;
  public machinery = [{
    "name" : "Retroexcavadora CAT 320D",
    "description" : "Excavadora CAT 320-D Cabina cerrada con A/C, brazo 5.70 m, cucharon de 1.0 m3, tren de rodaje estándar, zapatas de 700 mm, dos lámparas de trabajo montadas sobre cabina.",
    "img": "./assets/images/320d.png",
    "unitPrice": 535.42,
    "unitPriceOperator": 1154.05
  }, {
    "name": "Retroexcavadora CAT 417",
    "description": "Retroexcavadora CAT con 416 con cabina cerrada.",
    "img": "./assets/images/417.png",
    "unitPrice": 257.00,
    "unitPriceOperator": 767.68
  }, {
    "name": "Tractor CAT D-6H",
    "description": "Tractor de cadenas d-6n cabina cerrada, zapatas de 610 mm, dos lámparas de trabajo montadas sobre cabina.",
    "img": "./assets/images/d-6h.png",
    "unitPrice": 471.17,
    "unitPriceOperator": 1080.80
  }];

  estHours: number;
  operator: boolean;
  price : number;
  import : number = 0;
  tax : number = 0.16;
  total : number = 0;
  name: String;
  
  constructor() { 
  }

  ngOnInit() {
    this.activeQuote = false;
    this.currentMachine = this.machinery[0];
    this.operator = true;
  }

  changeMachine(index){
    this.currentMachine = this.machinery[index];
    this.onQuoteInit();
  }

  onQuoteInit(){
    this.activeQuote = true;
  }

  onDateChange(){
    console.log(this.rentDate);
  }

  print(): void{
    let contents, popup, title, remove;
    title = "Euro Trade S.A. de C.V.";
    contents = document.getElementById('print-section').innerHTML;
    remove = document.getElementById('remove-print').innerHTML;
    contents.slice(remove);
    popup = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popup.document.open();
    popup.document.write('<html><head><link href="./assets/css/flat-icon.css" rel="stylesheet"><link href="./assets/css/jquery.fancybox.min.css" rel="stylesheet"><link href="./assets/css/owl.carousel.min.css" rel="stylesheet"><link href="./assets/css/odometer.min.css" rel="stylesheet"><link href="./assets/css/bootstrap.min.css" rel="stylesheet"><link href="./assets/css/base.css" rel="stylesheet"><link href="./assets/css/style.css" rel="stylesheet"><style >.printable{ padding-left: 20px; padding-right: 20px;}</style><title>'+ title +'</title></head><body onload="window.print()"><hr>' + contents + '</div><br><br><br><br><br><div><img src="./assets/images/logo-colored.png"><p style="padding-left:15px;>Euro Trade SA de CV</p><p style="padding-left:15px;>Manuel Pérez Coronado 161-B, Las Camelinas Infonavit, Morelia Michoacán CP 58290</p><p style="padding-left:15px;>+52 443 3400392</p><br><p style="padding-left:15px;>hoscua@hotmail.com</p></div></body></html>');
    //<body onload="window.print();window.close()> "
    popup.document.close();
  }

}
