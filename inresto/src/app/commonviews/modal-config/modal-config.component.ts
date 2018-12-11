import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input, Output, EventEmitter, NgZone} from '@angular/core';
import { RouterModule, Routes, Router, NavigationStart, NavigationEnd } from '@angular/router';

import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-config',
  templateUrl: './modal-config.component.html',
  styleUrls: ['./modal-config.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class ModalConfigComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  open(content) {
    this.modalService.open(content);
  }
  
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
