import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { LogalStorageService } from '../../../services/logal-storage.service';
import { User } from '../../../models/user';
import { trigger, state, style, animate, transition } from '@angular/animations';



@Component({
  selector: 'app-form-registeruser',
  templateUrl: './form-registeruser.component.html',
  styleUrls: ['./form-registeruser.component.scss'],
  animations: [
    trigger('fade', [transition('void => *', [style({ opacity: 0 }), animate(500, style({opacity: 1}))])]),
    trigger('fade1', [transition('void => *', [style({ opacity: 0 }), animate(1000, style({opacity: 1}))])]),
    trigger('fade2', [transition('void => *', [style({ opacity: 0 }), animate(1500, style({opacity: 1}))]) ]),
  ]
})
export class FormRegisteruserComponent implements OnInit {

  userModel = new User();

  users;

  constructor(private userService: UserService, public localStorageService: LogalStorageService) { }

  ngOnInit(): void {// this.localStorageService.storeOnLocalStorage(new User("EjemploNombre","EjemploMail","EjemplPassword"));
    // this.localStorageService.readLocalStorage();
    this.getUsers();
  }
  onSubmit(){
    this.localStorageService.storeOnLocalStorage(this.userModel);
  }

  getUsers(): void{
    //this.userService.getUsers();;
    this.users = this.userService.getUser().subscribe((data: {}) =>{
      this.users = data;
      console.log('respuesta->' +  this.users);

    });
  }

  
  addUsers(nombre: string, correo: string, contrasena: string): void{
    nombre = nombre.trim();
    if (!nombre || !correo || !contrasena) { 
      return; 
    }
    this.users = this.userService.addUser({ nombre, correo, contrasena } as User)
      .subscribe(user => {
        this.users.push(user);
      });

      alert("Se agregó el usuario");
  }
  

  load(){
    this.userModel = this.localStorageService.readLocalStorage();
  }


  /*
  userModel = new User();

  usuarios;

  constructor(private userService: UserService, public localStorageService: LogalStorageService) { }

  ngOnInit(): void {// this.localStorageService.storeOnLocalStorage(new User("EjemploNombre","EjemploMail","EjemplPassword"));
    // this.localStorageService.readLocalStorage();
  }
  onSubmit(){
    this.localStorageService.storeOnLocalStorage(this.userModel);
  }
  getUsers(){
    this.userService.getUsers();
    console.log(this.userService.getUsers());
  }
  load(){
    this.userModel = this.localStorageService.readLocalStorage();
  }
  */

}
