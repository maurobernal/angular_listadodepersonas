import { EventEmitter, Injectable } from '@angular/core';
import { LogginService } from './LoggingService.service';
import { Persona } from './persona.model';

@Injectable()
export class PersonaService {
  personas: Persona[] = [
    new Persona('Juan', 'Perez'),
    new Persona('Laura', 'Juarez'),
    new Persona('Karla', 'Juarez'),
  ];
  /**
   *
   */
  saludar = new EventEmitter<number>();

  constructor(private logginServce: LogginService) {
    this.logginServce.enviarMensajeAConsola('Servicio inicializado...');
  }
  agregarPersona(persona: Persona) {
    this.personas.push(persona);
    this.logginServce.enviarMensajeAConsola(
      'Se agregó persona: ' + persona.nombre + ' ' + persona.apellido
    );
  }
}
