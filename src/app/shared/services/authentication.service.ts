import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";
import { loginmodel } from '../model/login.model';


@Injectable()
export class AuthenticationService {
    constructor(public http: HttpClient) { }
    login(username: string, password: string) {
    let login = new loginmodel();
    login.username = "neelam";
    login.password = "gupta";

    return this.http.post<any>('http://localhost:50265/api/Login/Login',  login ).pipe(map(user => {
                    // login successful if there's a jwt token in the response
                    if (user.Status == "200") { // && user.token
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('currentUser', JSON.stringify(user.Data));
                    }
                    return user.Data;
            }));
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
