import { Component, OnInit } from '@angular/core';
import { PersonaService } from './personas.services';
import * as firebase from 'firebase/app';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PersonaService],
})
export class AppComponent implements OnInit {
  constructor(private readonly loginService: LoginService) {}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyBfs4kBIWC8BfIAiKHPivI8APWETmfFtDc',
      authDomain: 'listadodepersonas-256a2.firebaseapp.com',
    });
  }
  titulo = 'Listado de Personas';
  isAutenticado(): boolean {
    return this.loginService.isAutenticado();
  }
  salir() {
    this.loginService.logout();
  }
}
