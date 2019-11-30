import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { QuienesSomosService } from '../quienes-somos.service';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent implements OnInit {
  quienesForm;
  quienesError;
  faPencilAlt = faPencilAlt;
  modo;
  isDisabled = true;

  constructor(public fb:FormBuilder, public quienesSomosService: QuienesSomosService, 
    private route: ActivatedRoute, private router:Router) {
    this.quienesForm=this.fb.group({
      titulo:["",[Validators.required]],
      descripcion:["",[Validators.required]],
      contacto:["",[Validators.required]]
    })
  }

  getQuienesSomos() {
    this.quienesSomosService.getQuienesSomos().subscribe( datos => { 
      if (datos["data"] != null){
        this.quienesForm.controls["titulo"].setValue(datos["data"].titulo);
        this.quienesForm.controls["descripcion"].setValue(datos["data"].descripcion);
        this.quienesForm.controls["contacto"].setValue(datos["data"].contacto);
      }
    })
  };

  saveQuienesSomos() {
    this.quienesSomosService.saveQuienesSomos(this.quienesForm.value).subscribe( datos => { 
      this.router.navigate(['/quienesSomos/DSP']);
    })
  }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.modo = params['mode'].toString();
        if (this.modo == "UPD"){
          this.isDisabled = false;
        } else {
          this.getQuienesSomos();
          this.isDisabled = true
        }
      })
  }

}
