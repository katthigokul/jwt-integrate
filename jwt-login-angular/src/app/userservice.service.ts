import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) {
  }
  public request: any = {
    //         "userName": "dcxvv",
    //         "password": "dszfcsv"
  }


  saveUser(user: any, password: any): Observable<any> {
    console.log("message");
    //const headers = new HttpHeaders({'Access-Control-Allow-Orgin': "*"});
    //const header = new Headers({'Content-Type': 'application/json'});
    this.request.userName = user;
    this.request.password = password;
    console.log(this.request);
    return this.http.post('http://localhost:8080/register', this.request);
  }


  login(userName: string, password: string) {
    console.log({ userName: userName, password: password }, "ID THIS THE METHOD??")
    this.http.get("http://localhost:8080/welcome", {responseType: 'text'}).subscribe(console.log)
    return this.http.post(`http://localhost:8080/authenticate`, { userName: userName, password: password })

  }

}
