import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto, ProductoService } from 'src/app/Service/producto.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  id:string="";
  productoActual: Producto={id:'',nombre:'',codigo:'',stock:'',precioCIVA:''};
  constructor(
    private productoService:ProductoService,
    private antivateRouter: ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.id= this.antivateRouter.snapshot.params.id;
    this.productoService.getUnProducto(this.id).subscribe(
      res=>{
        this.productoActual=res;
      },

      err=>console.log(err)
    );
  }
  
  guardar(){
    this.productoService.editProducto(this.id, this.productoActual).subscribe(
      res=>{
        this.router.navigate(['/listado']);
      },

      err=>console.log(err)
    );
  }

}
