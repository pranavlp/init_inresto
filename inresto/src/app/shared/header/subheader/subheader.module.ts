import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubheadlerleftComponent } from './subheadlerleft/subheadlerleft.component';
import { SubheadlerrightComponent } from './subheadlerright/subheadlerright.component';
// import { SubheadermainComponent } from './subheadermain/subheadermain.component';

@NgModule({
  declarations: [
    SubheadlerleftComponent,
    SubheadlerrightComponent,
    // SubheadermainComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    SubheadlerleftComponent,
    SubheadlerrightComponent
  ]
})
export class SubheaderModule { }
