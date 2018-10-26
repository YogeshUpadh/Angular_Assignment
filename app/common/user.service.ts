import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable } from 'rxjs'; 
import { User } from './user.model';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};

@Injectable()
export class UserService {
    readonly rootUrl = 'https://zibito-staging.azurewebsites.net/api/test';
    constructor(private http: HttpClient) { }

    registerUser(user: User) {
        const body: User = {
            firstName: user.firstName,
            lastName: user.lastName
        }
            var PostBody= JSON.stringify(body);
        return this.http.post(this.rootUrl, PostBody, httpOptions);
    }

    getUsers() {
        return this.http.get(this.rootUrl);
    }

}