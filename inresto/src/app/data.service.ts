import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, RequestOptionsArgs, Response, RequestMethod } from '@angular/http';
import { LoggerService } from './logger.service';
import { RouterModule, Routes, Router, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: Http, public logger: LoggerService) {
   }
}
