import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reservetable',
  templateUrl: './reservetable.component.html',
  styleUrls: ['./reservetable.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class ReservetableComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
    }

  openLg(content) {
    this.modalService.open(content, { windowClass: 'popupwindow' });
  }
  
  ngOnInit() {
  }

}
