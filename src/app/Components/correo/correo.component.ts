import { Component, OnInit } from '@angular/core';
import { getNsPrefix } from '@angular/compiler';
import { getMaxListeners } from 'process';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.scss']
})
export class CorreoComponent implements OnInit {

  correo: any;
  
  constructor() {
    this.correo = {
      titulo: 'Titulo del Email',
      cuerpo: 'Cuerpo del email',
      emisor: 'correoEmisor@gmail.com',
      destinatario: 'correoReceptor@gmail.com'
    }
   }

  ngOnInit(): void {
  }

}
