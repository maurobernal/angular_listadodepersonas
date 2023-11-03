import { Component } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonaService } from '../personas.services';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
})
export class PersonasComponent {
  personas: Persona[] = [];

  constructor(private readonly personasService: PersonaService) {}
  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }
}
