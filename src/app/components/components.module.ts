import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    CardComponent,
    InputComponent
  ],
  imports: [
    CommonModule, 
    MatInputModule,
    FormsModule,
    MatRadioModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule
  ],
  exports:[
    InputComponent,
    CardComponent
  ]
})
export class ComponentsModule { }
