import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { LoggerService } from './logger.service';
import { SharedModule } from './shared/shared.module';
import { CommonviewsModule } from './commonviews/commonviews.module';
import { WelcomeModule } from './welcome/welcome.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CommonviewsModule,
    WelcomeModule,
    NgbModule,
  ],
  providers: [
    DataService,
    LoggerService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(public logger: LoggerService,
    public data: DataService) {
  }
}

