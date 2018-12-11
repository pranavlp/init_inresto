import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommonviewsModule} from '../../commonviews/commonviews.module'
import { DineindashboardComponent } from './dineindashboard/dineindashboard.component';
import { DineinreservwalkinComponent } from './dineinreservwalkin/dineinreservwalkin.component';
import { AddreservationpopupComponent} from './addreservationpopup/addreservationpopup.component'
import {AddwalkinpopupComponent} from './addwalkinpopup/addwalkinpopup.component'
import {CheckavailabilitypopupComponent} from './checkavailabilitypopup/checkavailabilitypopup.component';
import { DineinfiltersComponent } from './dineinfilters/dineinfilters.component';

@NgModule({
  declarations: [DineindashboardComponent, DineinreservwalkinComponent, AddreservationpopupComponent, AddwalkinpopupComponent, CheckavailabilitypopupComponent, DineinfiltersComponent],
  imports: [
    CommonModule,
    CommonviewsModule
  ],exports:[
    DineindashboardComponent, DineinreservwalkinComponent, AddreservationpopupComponent, AddwalkinpopupComponent, CheckavailabilitypopupComponent, DineinfiltersComponent
  ]
})
export class DineinModule { }
