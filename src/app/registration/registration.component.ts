import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

    constructor(
        private formBuilder: FormBuilder
    ) {}
    loginForm!: FormGroup;
    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            EmpName: [''],
            EmpAge : new FormControl(''),
            EmpExp : [''],
            EmpSal : [''],
            EmpExSal : [''],
            EmpAdd : ['']
          });
        }
        login()
        {
          console.log(this.loginForm.value)
        }
    }
