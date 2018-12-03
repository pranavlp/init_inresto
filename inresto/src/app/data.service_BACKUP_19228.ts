import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient,HttpResponse,HttpHeaders,HttpParams,HttpRequest } from '@angular/common/http';
import { LoggerService } from './logger.service';
import { RouterModule, Routes, Router, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  static dataService: DataService;
<<<<<<< HEAD
  menuIndex = 0;
  constructor(public http: HttpClient, public logger: LoggerService) {
=======
  menuIndex = 1;
  submenuIndex = 101;
  constructor(public http: Http, public logger: LoggerService) {
>>>>>>> 3774aa4a330629dfe65553bfef2f194e133e1fdb
    DataService.dataService = this;
   }
   static getDataService(){
     return DataService.dataService;
   }
   public setLeftMenuIndex(index){
     this.menuIndex = index;
   }
   public getLeftMenuIndex(){
     return this.menuIndex;
   }

<<<<<<< HEAD
   public getResponseForUrl(getUrl) : Observable <HttpResponse<any>>{
     return this.http.get<any>(
       getUrl, {observe : 'response'}
     )
   }
=======
   public setLeftSubMenuIndex(index){
    this.submenuIndex = index;
  }
  public getLeftSubMenuIndex(){
    return this.submenuIndex;
  }
   
>>>>>>> 3774aa4a330629dfe65553bfef2f194e133e1fdb
}
