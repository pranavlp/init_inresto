import { Component, OnInit } from '@angular/core';
import { DataService} from '../../../../data.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-loginpin',
  templateUrl: './loginpin.component.html',
  styleUrls: ['./loginpin.component.scss']
})
export class LoginpinComponent implements OnInit {
  pin1:number;
  pin2:number;
  pin3:number;
  pin4:number;

  constructor(private dataService:DataService, private router:Router) { }

  ngOnInit() {
  }

  moveNext (event, elementN,elementB) {
    if(event.keyCode == ''){
      //console.log("Focus not changing");
    }
    else if(event.keyCode == 8){
      elementB.focus();
    } else{
      elementN.focus();
    }
  }
  logout(){
    this.dataService.getLogout().subscribe((data) => {
      console.log(data);
    });
    return false;
  }

}
