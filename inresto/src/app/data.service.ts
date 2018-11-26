import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   showHeader : Boolean;

  constructor() {
    this.showHeader = true;
  }

  public toggleHeader(){
    this.showHeader = !this.showHeader;
  }
  public getShowHeader(){
    return this.showHeader;
  }
}
