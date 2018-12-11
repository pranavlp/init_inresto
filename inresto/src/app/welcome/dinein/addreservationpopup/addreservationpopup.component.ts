import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addreservationpopup',
  templateUrl: './addreservationpopup.component.html',
  styleUrls: ['./addreservationpopup.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class AddreservationpopupComponent implements OnInit {

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
