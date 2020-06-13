import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import { HttpClient, HttpHeaders, 
        HttpResponse, HttpErrorResponse} from '@angular/common/http';

import { map, retry, catchError, tap} from 'rxjs/operators';
import { Report } from '../models/report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  endpoint = 'http://localhost:8080/api/reports'

  constructor( private http:HttpClient) { 
    
  }

  private extraData(res : Response){
    let body = res;
    return body || {};
  }

  getReport(): Observable<any>{
    return this.http.get(this.endpoint).pipe(map(this.extraData), retry(3));
  }

  //getAdmin(id: number): Observable<any>{ }

  addReport(report: Report): Observable<any>{
    return this.http.post(this.endpoint, report).pipe(map(this.extraData));
  }

  updateReport(report: Report): Observable<any> {
    return this.http.put<any>(this.endpoint + '/' + report.id, this.httpOptions).pipe(
      tap(_ => console.log(`Admin actualizado id=${report.id}`))
    );
  }

  deleteReport(report: Report | number): Observable<any> {
    const id = typeof report === 'number' ? report : report.id;
    const url = `${this.endpoint}/${id}`;
  
    return this.http.delete<any>(url, this.httpOptions).pipe(
      tap(_ => console.log(`Admin borrado id=${id}`))
    );
  }
}
