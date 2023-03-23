import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url='http://localhost:8080/api/productos';
  constructor(private http: HttpClient) { }

  getProductos():Observable<any>
  {
    return this.http.get(this.url);
  }

  getUnProducto(id: string):Observable<any>
  {
    return this.http.get(this.url+'/'+id);
  }

  saveProducto(producto: Producto):Observable<any>
  {
    return this.http.post(this.url, producto);
  }

  editProducto(id:string, producto: Producto):Observable<any>
  {
    return this.http.put(this.url+'/'+id, producto);
  }

  deleteProducto(id:string):Observable<any>
  {
    return this.http.delete(this.url+'/'+id);
  }
}


export interface Producto{
  id:string;
  nombre:string;
  codigo:string;
  stock:string;
  precioCIVA:string;
}