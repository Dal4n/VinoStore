import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactoComponent } from './contacto/contacto.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { ComponentsModule } from '../components/components.module';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    HomeComponent,
    ProductosComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    ComponentsModule
  ], 
  exports:[
    HomeComponent
  ]
})
export class VinosModule { }
