import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataService } from '../data.service';
import { LoggerService } from '../logger.service';
import { SharedModule } from '../shared/shared.module';
import { CommonviewsModule } from '../commonviews/commonviews.module';

import { WelcomeComponent } from './welcome/welcome.component';
import {DetailsModule} from './details/details.module';
import { JoinInrestoComponent } from './join-inresto/join-inresto.component';
import { JoinLeftnavigationComponent } from './join-inresto/join-leftnavigation/join-leftnavigation.component';
import { JoinHeadertabComponent } from './join-inresto/join-headertab/join-headertab.component';
import { CompanyProfileComponent } from './join-inresto/company-profile/company-profile.component';
import { SingleOutletComponent } from './join-inresto/company-profile/single-outlet/single-outlet.component';
import { FormsModule } from '@angular/forms';
import { MultipleOutletComponent } from './join-inresto/company-profile/multiple-outlet/multiple-outlet.component';
import { MultipleCompaniesComponent } from './join-inresto/company-profile/multiple-companies/multiple-companies.component';

@NgModule({
  declarations: [WelcomeComponent, JoinInrestoComponent, JoinLeftnavigationComponent, JoinHeadertabComponent, CompanyProfileComponent, SingleOutletComponent, MultipleOutletComponent, MultipleCompaniesComponent],
  imports: [
    CommonModule,
    SharedModule,
    CommonviewsModule,
    DetailsModule,
    FormsModule,
  ],exports:[
    WelcomeComponent,
    JoinInrestoComponent
  ]
})
export class WelcomeModule { }
