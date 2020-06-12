import { Component, OnInit } from '@angular/core';
import { UserService } from '../../userModule/services/user.service';
import { User } from '../../userModule/models/user';
import { LogalStorageService } from '../../userModule/services/logal-storage.service';
import { Report} from '../../userModule/models/report';


@Component({
  selector: 'app-reports-admin',
  templateUrl: './reports-admin.component.html',
  styleUrls: ['./reports-admin.component.scss'],
  providers: [UserService],
})
export class ReportsAdminComponent implements OnInit {

  public divReportes = false;
  public divEditar = true;
  public divValorado = true;
  public divUsers = true;
  public divAdmins = true;
  public divGraphs = true;
  public createGraphs = true;
  public graphsAdmin = true;

  constructor(public userService: UserService, public localStorageService: LogalStorageService) { }

  user: User = this.localStorageService.readLocalStorage();

  users;

  ngOnInit(): void {
    
    this.getUsers();
    // this.localStorageService.readLocalStorage();
    // this.localStorageService.storeOnLocalStorageReports(new Report("bache", "juan", "fecha", "descr", "foto", "hora"));
  }


  delete(id: string): void {
    this.userService.deleteUser({id}).subscribe();
    alert("Usuario borrado, recarga la pagina para ver la nueva lista");
  }

  /*
  users = [new User("Diego", "diego@reportit.com", "Contraseña"),
           new User("Alexandra", "ale@reportit.com", "Contraseña"),
           new User("Iván", "ivan@reportit.com", "Contraseña"),
          ];
  getUsers(){
    this.users = this.userService.getUsers();
  }
  */

 getUsers(){
  this.users = this.userService.getUser().subscribe((data: {}) => {
    this.users = data;
    console.log('respuesta ->' + this.user);
  })
  //console.log(this.adminService.getAdmins());
}

  verReportes(){
    this.divReportes = false;
    this.divValorado = true;
    this.divEditar = true;
    this.divUsers = true;
    this.divAdmins = true;
    this.divGraphs = true;
  }

  verEditar(){
    this.divEditar = false;
    this.divReportes = true;
    this.divValorado = true;
    this.divUsers = true;
    this.divAdmins = true;
    this.divGraphs = true;
  }

  verValorado(){
    this.divEditar = true;
    this.divReportes = true;
    this.divValorado = false;
    this.divUsers = true;
    this.divAdmins = true;
    this.divGraphs = true;
  }

  verUsuarios(){
    this.divEditar = true;
    this.divReportes = true;
    this.divValorado = true;
    this.divUsers = false;
    this.divAdmins = true;
    this.divGraphs = true;
  }

  verAdmins(){
    this.divEditar = true;
    this.divReportes = true;
    this.divValorado = true;
    this.divUsers = true;
    this.divAdmins = false;
    this.divGraphs = true;
  }

  verGraficas(){
    this.divEditar = true;
    this.divReportes = true;
    this.divValorado = true;
    this.divUsers = true;
    this.divAdmins = true;
    this.divGraphs = false;
  }

  showGraphicsComp(){
    this.graphsAdmin = !this.graphsAdmin;
  }


  showCreateGraphs(){
    this.createGraphs = !this.createGraphs;
  }

}

