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

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  private extraData(res : Response){
    let body = res;
    return body || {};
  }

  getAdmins(): Observable<any>{
    return this.http.get(this.endpoint).pipe(map(this.extraData), retry(3));
  }

  //getAdmin(id: number): Observable<any>{ }

  addAdmin(admin: Admin): Observable<any>{
    return this.http.post(this.endpoint, admin).pipe(map(this.extraData));
  }

  updateAdmin(admin: Admin): Observable<any> {
    return this.http.put<any>(this.endpoint + '/' + admin.id, this.httpOptions).pipe(
      tap(_ => console.log(`Admin actualizado id=${admin.id}`))
    );
  }

  deleteAdmin(admin: Admin | number): Observable<any> {
    const id = typeof admin === 'number' ? admin : admin.id;
    const url = `${this.endpoint}/${id}`;
  
    return this.http.delete<any>(url, this.httpOptions).pipe(
      tap(_ => console.log(`Admin borrado id=${id}`))
    );
  }

  /* Método para descargar reportes */
  /* Método para editar reportes */

}
