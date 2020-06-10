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
  }

  onSubmit(){
    this.localStorageService.storeOnLocalStorage(this.adminModel);
  }

  getUsers(){
    this.adminService.getAdmins();
    //console.log(this.adminService.getAdmins());
  }


}
