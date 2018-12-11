import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addwalkinpopup',
  templateUrl: './addwalkinpopup.component.html',
  styleUrls: ['./addwalkinpopup.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class AddwalkinpopupComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
  }
  openLg(content) {
    this.modalService.open(content, { windowClass: 'popupwindow' });
  }
  open(content) {
    this.modalService.open(content);
  }

}
