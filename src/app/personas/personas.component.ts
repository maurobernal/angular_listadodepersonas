import { Component } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonaService } from '../personas.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
})
export class PersonasComponent {
  personas: Persona[] = [];

  constructor(
    private readonly personasService: PersonaService,
    private readonly router: Router
  ) {}
  ngOnInit(): void {
    this.personasService.obtenerPersonas().subscribe((personas: Persona[]) => {
      this.personas = personas;
      this.personasService.setPersonas(personas);
    });
  }

  agregar() {
    this.router.navigate(['personas/agregar']);
  }
}
