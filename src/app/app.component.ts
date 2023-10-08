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
  
  headerTitle = "Login Form";
  buttonTitle = "Submit";

  loginForm!: FormGroup;

  ngOnInit():void{
    console.log('onit called');
    this.loginForm = this.formBuilder.group({
      username: ['Smriti'],
      password: new FormControl('')
    });
  }
  login()
  {
    console.log(this.loginForm.value)
  }
}
