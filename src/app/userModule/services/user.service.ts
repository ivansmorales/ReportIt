import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Report } from '../models/report';
import {StorageService} from 'ngx-webstorage-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, retry, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  users;

  endPoint = 'http://localhost:8080/api/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  private extractData(res: Response){
    let body = res;
    return body || [];
  }

  getUser(): Observable<any>{
    return this.http.get(this.endPoint).pipe(map(this.extractData), retry(3));
  }

  addUser(user: User): Observable<any>{
    return this.http.post(this.endPoint, user).pipe(map(this.extractData));

  }

 

   /* users = [new User("Usuario", "id", (new Report("Titulo reporte","Nombre que hace el reporte",
"Fecha reporte", "Descripcion del reporte", "Foto", "Hora"))) ];*/

  /*users = [new User('Diego', 'Correo', 'Contraseña'),
           new User('Alexandra', 'Correo', 'Contraseña'),
           new User('Iván', 'Correo', 'Contraseña'),
  ];*/

  /*
  getUsers(): User[]{
    return this.users;
  }

  addUser(user: User){
    this.users.push(user);
  }

  deleteUser(user: User){
    this.users.splice(1, 0);
  }
  */

}