import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


interface AirtableResponse {
  records: Object[]
}
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private TeamsApi: string = 'https://api.airtable.com/v0/appUBxaqmwbWUP9Rx/All%20Team%20Activities?api_key=keyq8O6XurhDwkxVL';
 private explorepikey: string = 'https://api.airtable.com/v0/appB26stg0dkRk7Zb/All%20Individual%20Activities?api_key=keyq8O6XurhDwkxVL';
 private eventepikey: string = 'https://api.airtable.com/v0/appEwol9ynU688TBN/Table%201?api_key=keyq8O6XurhDwkxVL';
 private circleApi: string = 'https://api.airtable.com/v0/appSaPUQYwoPVm8Ny/Table%201?api_key=keyhliJN6zZ2igddb';
 private blogapi: string ='https://api.airtable.com/v0/appOIzt4m2aWZT7fG/Table%201?api_key=keyhliJN6zZ2igddb';
 httpHeader = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

  constructor(private http: HttpClient) { }



  public getTeams(): Observable<Object[]> {
    return this.http.get(this.TeamsApi).pipe(
      map((res: AirtableResponse) => res.records)
    );
  }

  public getActivities(): Observable<Object[]> {
    return this.http.get(this.explorepikey).pipe(
      map((res: AirtableResponse) => res.records)
    );
  }



  public getPersons(): Observable<Object[]> {
    return this.http.get(this.circleApi).pipe(
      map((res: AirtableResponse) => res.records)
    );
  }

  public blogget(): Observable<Object[]> {
    return this.http.get(this.blogapi).pipe(
      map((res: AirtableResponse) => res.records)
    );
  }


}
