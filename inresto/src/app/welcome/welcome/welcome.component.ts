import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { RouterModule, Routes, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import {DataService} from '../../data.service';
import {LoggerService} from '../../logger.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor(public logger: LoggerService, private router: Router, public data: DataService, private location: Location) {
   }

  ngOnInit() {
  }
  ngOnChanges() {
  }
  ngDoCheck() {
  }
  ngAfterContentInit() {
  }
  ngAfterContentChecked() {
  }
  ngAfterViewInit() {
  }
  ngAfterViewChecked() {
  }
  ngOnDestroy() {
  }
  onButtonClick(){
    alert("button clicked");
  }

}
