import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../data.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-loginleft',
  templateUrl: './loginleft.component.html',
  styleUrls: ['./loginleft.component.scss']
})
export class LoginleftComponent implements OnInit {

  constructor(public dataService: DataService,private router: Router) { }

  ngOnInit() {
  }


}
