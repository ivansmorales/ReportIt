import { Inject, Injectable } from '@angular/core';
import {LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';
import { User } from '../models/user';
import { Report } from '../models/report';

@Injectable({
  providedIn: 'root'
})
export class LogalStorageService {

  public userList : User;
  public reportList : Report;

  public graphList = [];

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
    this.reportList = reportListStorage;
  }

  public readLocalStorageReports() : object{
    return this.storage.get('REPORT_LIST');
  }

  public storeOnLocalStorageAdmin(graph: string, x_array, y_array) : void{
    const graphListStorage = this.storage.get('GRAPH_LIST') || [];
    graphListStorage.push({title: graph, label: x_array, y_pos: y_array});
    this.storage.set('GRAPH_LIST', graphListStorage);
    this.graphList = graphListStorage;
  }

  public readLocalStorageAdmin() : object{
    return this.storage.get('GRAPH_LIST');
  }


}