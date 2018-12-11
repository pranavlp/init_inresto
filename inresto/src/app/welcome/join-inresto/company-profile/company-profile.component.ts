import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent implements OnInit {

  selectedLink: string="";

  setradio(e: string): void {  
    this.selectedLink = e;  
  }  
  
  isSelected(name: string): boolean {  
    if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
      return false;  
    }else { 
      return (this.selectedLink === name); // if current radio button is selected, return true, else return false 
    } 
        
  }
  constructor() { 
    this.selectedLink = "single_outlet";
  }

  ngOnInit() {
  }

}
