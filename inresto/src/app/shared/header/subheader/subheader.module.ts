import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubheadlerleftComponent } from './subheadlerleft/subheadlerleft.component';
import { SubheadlerrightComponent } from './subheadlerright/subheadlerright.component';

@NgModule({
  declarations: [SubheadlerleftComponent, SubheadlerrightComponent],
  imports: [
    CommonModule
  ]
})
export class SubheaderModule { }
