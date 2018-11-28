import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableimageComponent } from './tableimage/tableimage.component';
import { RestobuttonComponent } from './restobutton/restobutton.component';



@NgModule({
  declarations: [TableimageComponent, RestobuttonComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports :[
    NgbModule,
    TableimageComponent,
    RestobuttonComponent,
  ]
})
export class CommonviewsModule { }
