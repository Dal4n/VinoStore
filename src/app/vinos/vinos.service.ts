import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProductos } from '../Interface/productos';
import { environment } from '../environments/environment.development';
import { ICategoria } from '../Interface/categoria';

@Injectable({
  providedIn: 'root'
})
export class VinosService {

  private endpoint: string = environment.endPoint;
  private apiUrl = this.endpoint + '/Products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProductos[]> {
    let req = this.apiUrl + "/listar"
    return this.http.get<IProductos[]>(req);
  }

  getCat(): Observable<ICategoria[]> {
    let req = this.apiUrl + "/categoria"
    return this.http.get<ICategoria[]>(req);
  }
  
}
