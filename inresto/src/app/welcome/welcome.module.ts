import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataService } from '../data.service';
import { LoggerService } from '../logger.service';
import { SharedModule } from '../shared/shared.module';
import { CommonviewsModule } from '../commonviews/commonviews.module';

import { WelcomeComponent } from './welcome/welcome.component';
import {DashboardModule} from './dashboard/dashboard.module'
import {DetailsModule} from './details/details.module'
import { from } from 'rxjs';
@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    CommonviewsModule,
    DashboardModule,
    DetailsModule,
  ],exports:[
    WelcomeComponent,
  ]
})
export class WelcomeModule { }
