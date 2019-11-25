import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { QuienesSomosService } from '../quienes-somos.service';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent implements OnInit {
  quienesForm;

  constructor(public fb:FormBuilder, public quienesSomosService: QuienesSomosService) {
    this.quienesForm=this.fb.group({
      titulo:["",[Validators.required]],
      descripcion:["",[Validators.required]],
      contacto:["",[Validators.required]]
    })
  }

  getQuienesSomos() {
    this.quienesSomosService.getQuienesSomos().subscribe( datos => { 
      this.quienesForm = datos["data"].docs;
    })
  };

  saveQuienesSomos() {
    this.quienesSomosService.saveQuienesSomos(this.quienesForm.value).subscribe( datos => { 
      this.quienesForm = datos["data"].docs;
    })
  }

  ngOnInit() {
    this.getQuienesSomos();
  }

}
