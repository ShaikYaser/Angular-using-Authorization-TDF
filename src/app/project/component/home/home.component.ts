import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userall:any;
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
  }
  getdata(){
    this.service.getdata().subscribe((res)=>{
      this.userall=res;
    })
  }
}
