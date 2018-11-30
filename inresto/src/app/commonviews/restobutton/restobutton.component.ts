import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input, Output, EventEmitter, NgZone} from '@angular/core';
import { RouterModule, Routes, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-restobutton',
  templateUrl: './restobutton.component.html',
  styleUrls: ['./restobutton.component.scss']
})
export class RestobuttonComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input()
   buttonText;

   @Input()
   color

   @Input()
   bgcolor

  @Input()
  cornerradius

  @Output()
  setOnClick  = new EventEmitter<any>();
  constructor() {
  }

  getBtnStyle() {
    let mystyles = {
      'background': this.bgcolor,
      'color': this.color,
      'border-radius': this.cornerradius,
    }
    return mystyles;
  }
  ngOnChanges() {
  }
  ngOnInit() {
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
  buttonClicked(){
    this.setOnClick.emit(true);
  }

}
