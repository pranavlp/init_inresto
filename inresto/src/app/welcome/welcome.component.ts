import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(public data: DataService) { }

  ngOnInit() {
  }
  toggleHeader(){
    this.data.toggleHeader()
  }
}
