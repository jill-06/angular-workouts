import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormControl} from '@angular/forms';
import { FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  
  constructor(
    
  ){}
  
  

  ngOnInit():void{
    console.log('onit called');
    
    
  }
}
