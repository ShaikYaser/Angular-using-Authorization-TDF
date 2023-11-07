import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campany',
  templateUrl: './campany.component.html',
  styleUrls: ['./campany.component.css']
})
export class CampanyComponent implements OnInit {
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  Login(){
  this.router.navigate(["login"])
  }

}
