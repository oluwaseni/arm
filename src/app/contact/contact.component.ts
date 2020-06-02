import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FetchService } from '../services/fetch.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private fb:FormBuilder, private _router:Router, private _service:FetchService) { }

  ngOnInit(): void {
  }

  formModel= this.fb.group({
    fullName: ['', Validators.required],
    mobile: [''],
    message: ['', Validators.required],
    email: ['', Validators.required]

});


sendMail(){
  var body = {
    name: this.formModel.value.fullName,
    email: this.formModel.value.email,
    mobile: this.formModel.value.mobile,
    message: this.formModel.value.message,
  
  }

  this._service.sendEmail(body).subscribe(
    res =>{
      
     console.log(res)
     this._router.navigate(['home'])
    },
    err =>
    {
      if(err.status == 400){
      }
      else{
      console.log(err);
      }
    });
    
  }
}

