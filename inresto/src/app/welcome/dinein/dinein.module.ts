import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DineindashboardComponent } from './dineindashboard/dineindashboard.component';
import { DineinreservwalkinComponent } from './dineinreservwalkin/dineinreservwalkin.component';

@NgModule({
  declarations: [DineindashboardComponent, DineinreservwalkinComponent],
  imports: [
    CommonModule
  ]
})
export class DineinModule { }
