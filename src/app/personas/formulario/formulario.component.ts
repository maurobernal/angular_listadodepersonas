import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Persona } from '../../persona.model';
import { PersonaService } from '../../personas.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  nombreInput: string = '';
  apellidoInput: string = '';
  index = 0;
  modoEdicion: number = 0;

  constructor(
    private readonly personasService: PersonaService,
    private readonly router: Router,
    private readonly routerActive: ActivatedRoute
  ) {
    this.personasService.saludar.subscribe((indice: number) => alert(indice));
  }
  ngOnInit(): void {
    this.index = this.routerActive.snapshot.params['id'];
    this.modoEdicion = +this.routerActive.snapshot.queryParams['modoEdicion'];
    if (this.modoEdicion != null && this.modoEdicion === 1) {
      let persona = this.personasService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }
  onGuardarPersona() {
    let persona: Persona = new Persona(this.nombreInput, this.apellidoInput);
    if (this.modoEdicion != null && this.modoEdicion === 1) {
      this.personasService.modificarPersona(this.index, persona);
    } else {
      this.personasService.agregarPersona(persona);
    }
    this.router.navigate(['personas']);
  }
  onEliminarPersona() {
    if (this.modoEdicion != null && this.modoEdicion === 1) {
      this.personasService.eliminarPersona(this.index);
    }
    this.router.navigate(['personas']);
  }
}
