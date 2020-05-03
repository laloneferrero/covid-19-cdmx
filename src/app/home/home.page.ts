import { Component } from '@angular/core';
import { DataService,Alcaldia  } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public Alcaldias: Array<Alcaldia>

  constructor(private data: DataService) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.data.getData().subscribe( alcaldias => {
      this.Alcaldias = alcaldias;
    });
  }

}
