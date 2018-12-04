import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, RequestOptionsArgs, Response, RequestMethod } from '@angular/http';
import { LoggerService } from './logger.service';
import { RouterModule, Routes, Router, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  static dataService: DataService;
  menuIndex = 1;
  submenuIndex = 101;
  userLoggedIn = false;
  constructor(public http: Http, public logger: LoggerService) {
    DataService.dataService = this;
   }
   static getDataService(){
     return DataService.dataService;
   }

   public getIsUserLoggedIn(){
     return this.userLoggedIn;
   }

   public setIsUserLoggedIn(loggedIn){
     this.userLoggedIn = loggedIn;
   }
   public setLeftMenuIndex(index){
     this.menuIndex = index;
   }
   public getLeftMenuIndex(){
     return this.menuIndex;
   }

   public setLeftSubMenuIndex(index){
    this.submenuIndex = index;
  }
  public getLeftSubMenuIndex(){
    return this.submenuIndex;
  }
   
}
