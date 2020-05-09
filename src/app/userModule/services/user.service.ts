import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Report } from '../models/report';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  //users = [new User("Usuario", "id", (new Report("Titulo reporte", "Nombre que hace el reporte", "Fecha reporte", "Descripcion del reporte", "Foto", "Hora"))) ];

  users = [new User("Diego", "Correo", "Contraseña"),
           new User("Alexandra", "Correo", "Contraseña"),
           new User("Iván", "Correo", "Contraseña"),
          ];

  

  constructor() { }

  getUsers() : User[]{
    return this.users;
  }

  addUser(user : User){
    this.users.push(user);
  }

  deleteUser(user : User){
    this.users.splice(1,0);
  }

}
