import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableimageComponent } from './tableimage/tableimage.component';

@NgModule({
  declarations: [TableimageComponent],
  imports: [
    CommonModule
  ],
  exports :[
    TableimageComponent,
  ]
})
export class CommonviewsModule { }
