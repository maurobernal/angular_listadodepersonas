import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Persona } from '../persona.model';
import { PersonaService } from '../personas.services';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  nombreInput: string = '';
  apellidoInput: string = '';

  constructor(private readonly personasService: PersonaService) {
    this.personasService.saludar.subscribe((indice: number) => alert(indice));
  }

  onAgregarPersona() {
    let persona: Persona = new Persona(this.nombreInput, this.apellidoInput);
    this.personasService.agregarPersona(persona);
  }
}
