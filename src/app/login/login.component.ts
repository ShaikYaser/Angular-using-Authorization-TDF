import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private http:HttpClient,private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
  }
LoginForm=new FormGroup({
  username:new FormControl("",Validators.required),
  password:new FormControl("",Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(8)])),

})
login(){
  this.service.logindata(this.LoginForm.value).subscribe((res:any)=>{
    alert("u login")
    localStorage.setItem("token",res.jwtToken)
    this.router.navigate(["project"])
    this.LoginForm.reset();
  })
}

}
