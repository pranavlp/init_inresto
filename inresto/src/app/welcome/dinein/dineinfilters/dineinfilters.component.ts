import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dineinfilters',
  templateUrl: './dineinfilters.component.html',
  styleUrls: ['./dineinfilters.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class DineinfiltersComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
  }
  openLg(content) {
    this.modalService.open(content, { size: 'sm' });
  }
  open(content) {
    this.modalService.open(content);
  }

}
