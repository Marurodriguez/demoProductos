import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/Service/producto.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  lista:any=[];
  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.listarProductos();
  }

  listarProductos()
  {
    this.productoService.getProductos().subscribe(
      res=>{
        this.lista=res;
        console.log(res);
      },
      err=>console.log(err)
    );

  }

  eliminar(id:string)
  {
    this.productoService.deleteProducto(id).subscribe(
      res=>{this.ngOnInit();},
      err=>console.log(err)
    );
  }

}
