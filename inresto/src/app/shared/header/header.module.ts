import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadermainComponent } from './headermain/headermain.component';
import { HeaderleftComponent } from './headerleft/headerleft.component';
import { HeaderrightComponent } from './headerright/headerright.component';
import { HeaderoptionsComponent } from './headeroptions/headeroptions.component';

@NgModule({
  declarations: [
    HeadermainComponent,
    HeaderleftComponent,
    HeaderrightComponent,
    HeaderoptionsComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    HeadermainComponent,
    HeaderleftComponent,
    HeaderrightComponent,
    HeaderoptionsComponent
  ]
})
export class HeaderModule { }
