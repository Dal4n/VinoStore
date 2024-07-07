import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { VinosModule } from './vinos/vinos.module';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    VinosModule,
    ComponentsModule,
    HttpClientModule,
    RouterOutlet, 
    RouterLink,
    RouterLinkActive,
    NgFor,
    NgIf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'VinoStore';
  correo = '21000028@alumnos.utleon.edu.mx';
  nombre = "Diego Alonso Landin"


}
