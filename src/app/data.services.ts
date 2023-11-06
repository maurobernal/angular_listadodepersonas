import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from './persona.model';

@Injectable()
export class DataServices {
  constructor(private readonly httpClient: HttpClient) {}

  guardarPersonas(personas: any[]) {
    this.httpClient
      .put(
        'https://listadodepersonas-256a2-default-rtdb.firebaseio.com/datos.json',
        personas
      )
      .subscribe(
        (response) => {
          console.log('resultado de guardar las personas: ' + response);
        },
        (error) => console.log('Error al guardar personas: ' + error)
      );
  }

  cargarPersonas(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(
      'https://listadodepersonas-256a2-default-rtdb.firebaseio.com/datos.json'
    );
  }
}
