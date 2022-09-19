import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ViewUsersComponent } from './user/view-users/view-users.component';
import { AddEditUserComponent } from './user/add-edit-user/add-edit-user.component';
import { LeaverequestComponent } from './leave-request/leaverequest.component';
import { ViewLeaverequestsComponent } from './leave-request/view-leaverequests/view-leaverequests.component';
import { AddEditLeaverequestComponent } from './leave-request/add-edit-leaverequest/add-edit-leaverequest.component';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ViewUsersComponent,
    AddEditUserComponent,
    LeaverequestComponent,
    ViewLeaverequestsComponent,
    AddEditLeaverequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
