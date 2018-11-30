import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { RouterModule, Routes, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from '../../../data.service';
import { LoggerService } from '../../../logger.service';

@Component({
  selector: 'app-dineinreservwalkin',
  templateUrl: './dineinreservwalkin.component.html',
  styleUrls: ['./dineinreservwalkin.component.scss']
})
export class DineinreservwalkinComponent implements OnInit, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor(public logger: LoggerService, private router: Router, public data: DataService, private location: Location) { }

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
