import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { LogalStorageService } from '../../../services/logal-storage.service';
import { User } from '../../../models/user';



@Component({
  selector: 'app-form-registeruser',
  templateUrl: './form-registeruser.component.html',
  styleUrls: ['./form-registeruser.component.scss']
})
export class FormRegisteruserComponent implements OnInit {

  userModel = new User();

  usuarios;

  constructor(private userService  : UserService, public localStorageService : LogalStorageService) { }

  ngOnInit(): void {
    
    this.localStorageService.storeOnLocalStorage(new User("P","P","P"));
    this.localStorageService.readLocalStorage();

  }


  onSubmit(){
    this.localStorageService.storeOnLocalStorage(this.userModel);
  }

  getUsers(){
    this.userService.getUsers();
    console.log(this.userService.getUsers());
  }

  load(){
    this.usuarios = this.localStorageService.readLocalStorage();
  }

}
