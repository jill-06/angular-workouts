import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl} from '@angular/forms';
import { FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder
  ){}
  
  loginForm!: FormGroup;

  ngOnInit():void{
    console.log('onit called');
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
