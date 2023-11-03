import { Component, EventEmitter, Input } from '@angular/core';
import { Persona } from '../../persona.model';
import { PersonaService } from '../../personas.services';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent {
  @Input() persona: Persona = new Persona('', '');
  @Input() indice: number = 0;

  constructor(private readonly personaService: PersonaService) {}

  emitirSaludo() {
    this.personaService.saludar.emit(this.indice);
  }
}
