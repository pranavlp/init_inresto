import { Component, OnInit } from '@angular/core';
import { NgbTypeahead, NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-outlet-add-brand',
  templateUrl: './outlet-add-brand.component.html',
  styleUrls: ['./outlet-add-brand.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class OutletAddBrandComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  // open(content) {
  //   this.modalService.open(content, { size: "lg"});
  // }
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  ngOnInit() {
  }

}
