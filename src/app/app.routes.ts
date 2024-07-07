import { Routes } from '@angular/router';
import { ProductosComponent } from './vinos/productos/productos.component';
import { ContactoComponent } from './vinos/contacto/contacto.component';
import { HomeComponent } from './vinos/home/home.component';

export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path: 'products', component: ProductosComponent},
    {path: 'contact', component: ContactoComponent},
    {path:'', redirectTo: '/home', pathMatch: 'full'}
];
