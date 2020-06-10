import { Injectable } from '@angular/core';
import {Admin} from '../models/admin';

import { Observable, of, throwError } from 'rxjs';

import { HttpClient, HttpHeaders, 
        HttpResponse, HttpErrorResponse} from '@angular/common/http';

import { map, retry, catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  admins;

  endpoint = 'http://localhost:8080/api/admins';

  constructor(private http: HttpClient) { }

  private extraData(res : Response){
    let body = res;
    return body || {};
  }

  getAdmins(): Observable<any>{
    return this.http.get(this.endpoint).pipe(map(this.extraData), retry(3));
  }

  addAdmin(admin: Admin){
    this.admins.push(admin);
  }

  deleteAdmin(admin: Admin){
    this.admins.splice(1, 0);
  }

  /* Método para descargar reportes */
  /* Método para editar reportes */

}
