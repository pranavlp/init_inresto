import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-loginemilpassword',
  templateUrl: './loginemilpassword.component.html',
  styleUrls: ['./loginemilpassword.component.scss']
})
export class LoginemilpasswordComponent implements OnInit {
  username:"";
  password:"";
  submitted = false;

  constructor(public dataService: DataService,private router: Router) { }

  ngOnInit() {
  }
  onSubmit(){
    this.dataService.postLogin(this.username,this.password).subscribe((data) => {
      if(data['message'] == 'Success'){
        this.dataService.setUserInfo(true,data['data'].account,data['data'].companyGroup,data['data'].companyCount,data['data'].account.superAdmin);//may set company Group and Company Name also here.
        console.log(data);
        if(data['data'].account){
          console.log("Data account exists.");
          if(data['data'].account.superAdmin == true && data['data'].companyCount == 0){
            console.log("1");
            this.router.navigate(['/account-settings/company']);
          } else if(data['data'].account.superAdmin == true && data['data'].companyCount > 0){
            console.log("2");
            this.router.navigate(['/welcome']);
          } else if(data['data'].account.superAdmin == false){
            console.log("3");
            this.router.navigate(['/login']);  // have to create to enter PIN
          }
        }
      } else{
        //console.log(data['error']);
        this.dataService.setUserInfo(false,null,null,0,false);
      }
    });
  }
}
