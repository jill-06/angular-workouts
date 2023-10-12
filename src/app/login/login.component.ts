import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm!: FormGroup;

    constructor(
        private formBuilder: FormBuilder // Dependency Injection or autowiring
    ) {
    }

    ngOnInit(): void {

        this.loginForm = this.formBuilder.group({
            
            userName: ['', [Validators.required]],
            password: new FormControl('', [Validators.minLength(3), Validators.maxLength(5)])
        });
        console.log('form initalized -->', this.loginForm);
        // this.loginForm.valueChanges.subscribe((d) => {
        //     console.log('form subscription data -->', d);
        // });

        // this.loginForm.statusChanges.subscribe((e) => {
        //     console.log('status changed -->', e);
        //     if (e === 'VALID') {
        //         console.log('valid form');
        //     } else {
        //         console.log('invalid form');
        //     }
        // })
    }

    login() {
        console.log(this.loginForm.value);
      }


}