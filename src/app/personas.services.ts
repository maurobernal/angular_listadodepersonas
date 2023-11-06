import { EventEmitter, Injectable } from '@angular/core';
import { LogginService } from './LoggingService.service';
import { Persona } from './persona.model';
import { DataServices } from './data.services';
import { Observable } from 'rxjs';

@Injectable()
export class PersonaService {
  personas: Persona[] = [];
  /**
   *
   */
  saludar = new EventEmitter<number>();

  constructor(
    private logginServce: LogginService,
    private readonly dataService: DataServices
  ) {
    this.logginServce.enviarMensajeAConsola('Servicio inicializado...');
  }

  setPersonas(personas: Persona[]) {
    this.personas = personas;
  }
  obtenerPersonas(): Observable<Persona[]> {
    return this.dataService.cargarPersonas();
  }

  agregarPersona(persona: Persona) {
    if (this.personas == null) {
      this.personas = [];
    }
    this.personas.push(persona);
    this.dataService.guardarPersonas(this.personas);
    this.logginServce.enviarMensajeAConsola(
      'Se agregó persona: ' + persona.nombre + ' ' + persona.apellido
    );
  }

  modificarPersona(index: number, persona: Persona) {
    let persona1 = this.personas[index];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
    this.logginServce.enviarMensajeAConsola(
      'Se agregó persona: ' + persona.nombre + ' ' + persona.apellido
    );
    this.dataService.modificarPersona(index, persona);
  }
  encontrarPersona(index: number) {
    let persona: Persona = this.personas[index];
    return persona;
  }
  eliminarPersona(index: number) {
    this.personas.splice(index, 1);
    this.dataService.eliminarPersona(index);
    this.modificarPersonas();
  }
  modificarPersonas() {
    if (this.personas != null) {
      this.dataService.guardarPersonas(this.personas);
    }
  }
}
