import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NuestraHistoriaService } from '../services/nuestra-historia.service';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nuestra-historia',
  templateUrl: './nuestra-historia.component.html',
  styleUrls: ['./nuestra-historia.component.css']
})
export class NuestraHistoriaComponent implements OnInit {
  historiaForm;
  historiaError;
  faPencilAlt = faPencilAlt;
  modo;
  isDisabled = true;

  constructor(public fb:FormBuilder, public historiaService: NuestraHistoriaService, 
    private route: ActivatedRoute, private router:Router) {
      this.historiaForm=this.fb.group({
        titulo:["",[Validators.required]],
        descripcion:["",[Validators.required]],
        contacto:["",[Validators.required]]
      })
     }

     gethistoria() {
      this.historiaService.getHistoria().subscribe( datos => { 
        if (datos["data"] != null){
          this.historiaForm.controls["titulo"].setValue(datos["data"].titulo);
          this.historiaForm.controls["descripcion"].setValue(datos["data"].descripcion);
          this.historiaForm.controls["contacto"].setValue(datos["data"].contacto);
        }
      })
    };
  
    saveHistoria() {
      this.historiaService.saveHistoria(this.historiaForm.value).subscribe( datos => { 
        this.router.navigate(['/historia/DSP']);
      })
    }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.modo = params['mode'].toString();
        if (this.modo == "UPD"){
          this.isDisabled = false;
        } else {
          this.gethistoria();
          this.isDisabled = true
        }
      })
  }

}
