import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { ApplicationPageComponent } from './Applicants/application-page/application-page.component';
import { MessagePage1Component } from './Applicants/message-page1/message-page1.component';
import { MessagePage2Component } from './Applicants/message-page2/message-page2.component';
import { StoreModule } from '@ngrx/store';
import { applicantReducer } from './Applicants/state/applicant.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MessagePage1Component,
    MessagePage2Component,
    ApplicationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ message: applicantReducer })
  ],
  exports: [HeaderComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
