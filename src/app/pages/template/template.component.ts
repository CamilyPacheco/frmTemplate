import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent implements OnInit {

  generos:any=['masculino', 'femenino','otros']
  

  usuarios={
    nombre:'',
    apellido:'',
    email:'', 
    genero:''

  }

  constructor(){
    
  }

  ngOnInit(): void {
      
  }

  guardar(forma:NgForm){

    if(forma.invalid){
      Object.values(forma.controls).forEach(control => {
        control.markAsTouched();
      })
      return;
    }

    console.log(forma.value);

  }

}

