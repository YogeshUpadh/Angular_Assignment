import { Component, OnInit } from '@angular/core';
import { User } from '../common/user.model';
import { NgForm } from '@angular/forms';
import { UserService } from '../common/user.service';
import { Observable } from 'rxjs';
//import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    //styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
    user: User;
    responseData: {};
    books: any[] = []; 

    //constructor(private userService: UserService, private toastr: ToastrService) { }
    constructor(private userService: UserService) { }

    ngOnInit() {
        this.resetForm();
    }

    resetForm(form?: NgForm) {
        if (form != null)
            form.reset();
        this.user = {
            firstName: '',
            lastName: ''
        }
    }

    OnSubmit(form: NgForm) {
        this.userService.registerUser(form.value)
            .subscribe((data: any) => {
                if (Object.keys(data).length>=1) {
                    this.resetForm(form);
                    alert('Thank You for Registring');
                    console.log(data);
                }
                else
                    //this.toastr.error(data.Errors[0]);
                    alert('Sorry!! Try Again');
                    console.log(data);
            });
    }

    showRegisteredUser() {
        this.userService.getUsers().subscribe(data => {
            this.responseData = data ;
            console.log(this.responseData);
        },
            error => {
                alert('Sorry!! Try Again');
                console.log("Error");
                //return Observable.throw(error);
        });
    }

}