import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { InventoryModule } from '../inventory/inventory.module';
import { SalesModule } from '../sales/sales.module';

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    DashboardModule,
    InventoryModule,
    SalesModule
  ],exports:[
    DetailsComponent,
  ]
})
export class DetailsModule { }
