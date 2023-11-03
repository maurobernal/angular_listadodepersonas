import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { PersonaService } from './personas.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PersonaService],
})
export class AppComponent {
  titulo = 'Listado de Personas';
}
