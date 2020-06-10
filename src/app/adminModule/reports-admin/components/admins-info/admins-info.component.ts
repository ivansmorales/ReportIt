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


}
