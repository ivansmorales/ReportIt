import { Inject, Injectable } from '@angular/core';
import {LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';
import { User } from '../models/user';
import { Report } from '../models/report';

@Injectable({
  providedIn: 'root'
})
export class LogalStorageService {

  public userList : User;

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  public storeOnLocalStorage(user: User) : void{
    const userListStorage = this.storage.get('USER_LIST') || [];
    userListStorage.push({nombre: user.nombre, correo: user.correo, contrasena: user.contrasena, fecha: new Date()});
    this.storage.set('USER_LIST', userListStorage);
    this.userList = userListStorage;

  }

  public readLocalStorage() : object{
    return this.storage.get('USER_LIST');
  }

  public storeOnLocalStorageReports (report : Report) : void {
    const reportListStorage = this.storage.get('REPORT_LIST') || [];
    reportListStorage.push({ titulo : report.titulo, nombre : report.nombre,  fecha: new Date(), descripcion : report.descripcion, foto : report.foto, hora : new Date()});
    this.storage.set('REPORT_LIST', reportListStorage);
  }

}
