import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagePage1Component } from './Applicants/message-page1/message-page1.component';
import { MessagePage2Component } from './Applicants/message-page2/message-page2.component';
import { ApplicationPageComponent } from './Applicants/application-page/application-page.component';

const routes: Routes = [
  { path: '', component: ApplicationPageComponent, pathMatch: 'full' },
  { path: 'message1', component: MessagePage1Component, pathMatch: 'full' },
  { path: 'message2', component: MessagePage2Component, pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
