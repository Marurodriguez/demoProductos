import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto, ProductoService } from 'src/app/Service/producto.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  productoNuevo: Producto={id:'',nombre:'',codigo:'',stock:'',precioCIVA:''};

  constructor(private productoService: ProductoService, private router:Router) { }

  ngOnInit(): void {

  }

  agregarProducto(){
    this.productoService.saveProducto(this.productoNuevo).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/listado']);
      },
      err=>console.log(err)
    );
  }

}
