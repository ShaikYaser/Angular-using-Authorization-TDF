import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router,private http:HttpClient,private service:ServiceService) { }

  ngOnInit(): void {
  }
SignupForm=new FormGroup({
  name:new FormControl("",Validators.required),
  email:new FormControl("",Validators.compose([Validators.required,Validators.email])),
  password:new FormControl("",Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(8)])),
  roles:new FormControl("",Validators.required)
})
submit(){
  this.service.sing(this.SignupForm.value).subscribe((res)=>{
    alert("the Registration complete")
    this.router.navigate(["login"])
    this.SignupForm.reset();
  })
}

}
