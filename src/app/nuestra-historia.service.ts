import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NuestraHistoriaService {

  constructor(private http: HttpClient) { }

  //ToDo: agregar servicios contra la API
}
