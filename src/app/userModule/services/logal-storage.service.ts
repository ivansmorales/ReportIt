import { Inject, Injectable } from '@angular/core';
import {LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';
import { User } from '../models/user';
import { Report } from '../models/report';
import { Admin } from '../../adminModule/models/admin';
import { Contacto } from '../../main_components/models/contacto';

@Injectable({
  providedIn: 'root'
})
export class LogalStorageService {

  public userList: User;
  public reportList: Report;
  public adminList: Admin;
  public contactoList: Contacto;

  public graphList = [];

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  public storeOnLocalStorage(user: User): void{
    const userListStorage = this.storage.get('USER_LIST') || [];
    userListStorage.push({nombre: user.nombre, correo: user.correo, contrasena: user.contrasena, fecha: new Date()});
    this.storage.set('USER_LIST', userListStorage);
    this.userList = userListStorage;

  }

  public readLocalStorage(): object{
    return this.storage.get('USER_LIST');
  }

  public storeOnLocalStorageReports(report: Report): void {
    const reportListStorage = this.storage.get('REPORT_LIST') || [];
    reportListStorage.push({ titulo : report.titulo, nombre : report.nombre,  fecha: new Date(),
    descripcion : report.descripcion, foto : report.foto, hora : new Date()});
    this.storage.set('REPORT_LIST', reportListStorage);
    this.reportList = reportListStorage;
  }

  public readLocalStorageReports(): object{
    return this.storage.get('REPORT_LIST');
  }

  public storeOnLocalStorageContactoForm(contacto: Contacto): void{
    const contactoFormListStorage = this.storage.get('CONTACTOFORM_LIST') || [];
    contactoFormListStorage.push(
      {nombre: contacto.nombre, correo: contacto.correo, titulo: contacto.titulo, 
      mensaje: contacto.mensaje });
    this.storage.set('CONTACTOFORM_LIST', contactoFormListStorage);
    this.contactoList = contactoFormListStorage;
  }

  public readLocalStorageContactForm(): object{
    return this.storage.get('CONTACTOFORM_LIST');
  }

  public storeOnLocalStorageAdminM(admin : Admin): void{
    const adminListStorage = this.storage.get('ADMIN_LIST') || [];
    adminListStorage.push({nombre: admin.nombre, correo: admin.correo, contrasena: admin.contrasena});
    this.storage.set('ADMIN_LIST', adminListStorage);
    this.adminList = adminListStorage;

  }

  public readLocalStorageAdminM(): object{
    return this.storage.get('ADMIN_LIST');
  }

  public storeOnLocalStorageAdmin(graph: string, xArray, yArray): void{
    const graphListStorage = this.storage.get('GRAPH_LIST') || [];
    graphListStorage.push({title: graph, label: xArray, y_pos: yArray});
    this.storage.set('GRAPH_LIST', graphListStorage);
    this.graphList = graphListStorage;
  }

  public readLocalStorageAdmin(): object{
    return this.storage.get('GRAPH_LIST');
  }

}
