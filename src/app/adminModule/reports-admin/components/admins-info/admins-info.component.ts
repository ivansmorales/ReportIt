import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { Admin } from '../../../models/admin';
import {LogalStorageService} from '../../../../userModule/services/logal-storage.service';


@Component({
  selector: 'app-admins-info',
  templateUrl: './admins-info.component.html',
  styleUrls: ['./admins-info.component.scss'],
  providers: [AdminService]

})
export class AdminsInfoComponent implements OnInit {
  adminModel = new Admin();

  admins;

  constructor(public adminService: AdminService, public localStorageService: LogalStorageService) { }

  ngOnInit(): void {
    this.getAdmins();
  }

  getAdmins(){
    this.admins = this.adminService.getAdmins().subscribe((data: {}) => {
      this.admins = data;
      console.log('respuesta ->' + this.admins);
    })
    //console.log(this.adminService.getAdmins());
  }

  addAdmin(nombre: string, correo: string, contrasena: string): void {
    nombre = nombre.trim();
    if (!nombre || !correo || !contrasena) { 
      return; 
    }
    this.admins = this.adminService.addAdmin({ nombre, correo, contrasena } as Admin)
      .subscribe(admin => {
        this.admins.push(admin);
      });
    alert("Admin agregado");
  }

  updateAdmin(id: string, nombre: string, correo: string, contrasena: string): void {
    this.adminService.updateAdmin({id, nombre, correo, contrasena}).subscribe(admin => {
        this.admins.push(admin);
      });
    alert("Admin editado");
  }

  delete(id: string): void {
    this.adminService.deleteAdmin({id}).subscribe();
    alert("Usuario borrado, recarga la pagina para ver la nueva lista");
  }

}
