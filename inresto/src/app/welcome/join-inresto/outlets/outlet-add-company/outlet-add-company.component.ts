import { Component, OnInit } from '@angular/core';
import { NgbTypeahead, NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-outlet-add-company',
  templateUrl: './outlet-add-company.component.html',
  styleUrls: ['./outlet-add-company.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class OutletAddCompanyComponent implements OnInit {

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
