import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Alcaldia {
  x: string;
  serie: number;
  logo:string
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { 
    
  }
  getData():Observable<Alcaldia[]>{
    const url = 'https://datos.cdmx.gob.mx/api/records/1.0/analyze/?refine.resultado=Positivo+SARS-CoV-2&refine.entidad_res=CIUDAD+DE+M%C3%89XICO&maxpoints=0&x=municipio_res&y.serie.expr=resultado&y.serie.func=COUNT&dataset=casos-asociados-a-covid-19&timezone=America%2FMexico_City&lang=es'
    return this.http.get<Alcaldia[]>(url);
  }

}
