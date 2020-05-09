import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

import { User } from '../../../models/user';



@Component({
  selector: 'app-form-registeruser',
  templateUrl: './form-registeruser.component.html',
  styleUrls: ['./form-registeruser.component.scss']
})
export class FormRegisteruserComponent implements OnInit {

  userModel = new User();


  constructor(private userService  : UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }


  onSubmit(){
    this.userService.addUser(this.userModel);
    console.log("On submit: " + this.userModel );
    console.log("getUsers: " + this.getUsers());
  }

  getUsers(){
    this.userService.getUsers();
    console.log(this.userService.getUsers());
  }

 
}
