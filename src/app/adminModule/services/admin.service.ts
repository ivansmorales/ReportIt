import { Injectable } from '@angular/core';
import {Admin} from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  admins = [new Admin('Administrador', 'id') ];

  constructor() { }

  getAdmins(): Admin[]{
    return this.admins;
  }

  addAdmin(admin: Admin){
    this.admins.push(admin);
  }

  deleteAdmin(admin: Admin){
    this.admins.splice(1, 0);
  }

  /* Método para descargar reportes */
  /* Método para editar reportes */

}
