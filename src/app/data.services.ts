import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from './persona.model';
import { LoginService } from './login/login.service';

@Injectable()
export class DataServices {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly loginService: LoginService
  ) {}

  guardarPersonas(personas: any[]) {
    const token = this.loginService.getIdToken();
    this.httpClient
      .put(
        'https://listadodepersonas-256a2-default-rtdb.firebaseio.com/datos.json?auth=' +
          token,
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
    const token = this.loginService.getIdToken();
    return this.httpClient.get<Persona[]>(
      'https://listadodepersonas-256a2-default-rtdb.firebaseio.com/datos.json?auth=' +
        token
    );
  }

  modificarPersona(index: number, persona: Persona) {
    const token = this.loginService.getIdToken();
    let url: string;
    url =
      'https://listadodepersonas-256a2-default-rtdb.firebaseio.com/datos/' +
      index +
      '.json?auth=' +
      token;
    this.httpClient.put(url, persona).subscribe(
      (r) => console.log('resultado de modificar persona: ' + r),
      (r) => console.log('error al modificar persona: ' + r)
    );
  }

  eliminarPersona(index: number) {
    const token = this.loginService.getIdToken();
    let url: string;
    url =
      'https://listadodepersonas-256a2-default-rtdb.firebaseio.com/datos/' +
      index +
      '.json?auth=' +
      token;
    this.httpClient.delete(url).subscribe(
      (r) => console.log('resultado de eliminar persona: ' + r),
      (r) => console.log('error al eliminar persona: ' + r)
    );
  }
}
