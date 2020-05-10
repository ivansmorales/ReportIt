import { Component, OnInit } from '@angular/core';
import { UserService } from '../../userModule/services/user.service';
import { User } from '../../userModule/models/user';
import { LogalStorageService } from '../../userModule/services/logal-storage.service';

@Component({
  selector: 'app-reports-admin',
  templateUrl: './reports-admin.component.html',
  styleUrls: ['./reports-admin.component.scss'],
  providers: [UserService]
})
export class ReportsAdminComponent implements OnInit {

  public divReportes : boolean = false;
  public divEditar : boolean = true;
  public divValorado : boolean = true;
  public divUsers : boolean = true;
  public divGraphs : boolean = true;

  constructor(public userService : UserService, public localStorageService : LogalStorageService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  users = [new User("Diego", "diego@reportit.com", "Contraseña"),
           new User("Alexandra", "ale@reportit.com", "Contraseña"),
           new User("Iván", "ivan@reportit.com", "Contraseña"),
          ];


  getUsers(){
    this.users = this.userService.getUsers();
  }
  

  verReportes(){
    this.divReportes = false;
    this.divValorado = true;
    this.divEditar = true;
    this.divUsers = true;
    this.divGraphs = true;
  }

  verEditar(){
    this.divEditar = false;
    this.divReportes = true;
    this.divValorado = true;
    this.divUsers = true;
    this.divGraphs = true;
  }

  verValorado(){
    this.divEditar = true;
    this.divReportes = true;
    this.divValorado = false;
    this.divUsers = true;
    this.divGraphs = true;
  }

  verUsuarios(){
    this.divEditar = true;
    this.divReportes = true;
    this.divValorado = true;
    this.divUsers = false;
    this.divGraphs = true;
  }

  verGraficas(){
    this.divEditar = true;
    this.divReportes = true;
    this.divValorado = true;
    this.divUsers = true;
    this.divGraphs = false;
  }

}
