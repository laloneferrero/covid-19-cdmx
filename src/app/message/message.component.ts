import { Component, OnInit, Input } from '@angular/core';
import { Alcaldia } from '../services/data.service';
import { debug } from 'util';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  @Input() alcaldia: Alcaldia;
  logo: String;
  constructor() { }

  ngOnInit() {
    this.addImage(this.alcaldia);
  }

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }

  addImage(alcaldia:Alcaldia){
    switch (alcaldia.x) {
      case 'Azcapotzalco':
        this.logo='../../assets/img/Azcapotzalco.jpg';
      break;
      case 'Benito Juárez':
        this.logo='../../assets/img/benitoJuarez.jpg';
      break;
      case 'Coyoacán':
        this.logo='../../assets/img/coyoacan.jpg';
      break;
      case 'Cuajimalpa de Morelos':
        this.logo='../../assets/img/cuajimalpa.jpg';
      break;
      case 'Cuauhtémoc':
        this.logo='../../assets/img/cuahutemoc.jpg';
      break;
      case 'Gustavo A. Madero':
        this.logo='../../assets/img/gustavoAMadero.jpg';
      break;
      case 'Iztacalco':
        this.logo='../../assets/img/Iztacalco.jpg';
      break;
      case 'Iztapalapa':
        this.logo='../../assets/img/iztapalapa.jpg';
      break;
      case 'La Magdalena Contreras':
        this.logo='../../assets/img/magdalenaContreras.jpg';
      break;
      case 'Miguel Hidalgo':
        this.logo='../../assets/img/miguelHidalgo.jpg';
      break;
      case 'Milpa Alta':
        this.logo='../../assets/img/milpaAlta.jpg';
      break;
      case 'Tlalpan':
        this.logo='../../assets/img/tlalpan.jpg';
      break;
      case 'Tláhuac':
        this.logo='../../assets/img/tlahuac.jpg';
      break;
      case 'Venustiano Carranza':
        this.logo='../../assets/img/venustianoCarranza.jpg';
      break;
      case 'Xochimilco':
        this.logo='../../assets/img/xochimilco.png';
      break;
      case 'Álvaro Obregón':
        this.logo='../../assets/img/alvaroObregon.jpg';
      break;
    }
  }
}
