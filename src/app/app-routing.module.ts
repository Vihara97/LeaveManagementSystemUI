import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LeaverequestComponent } from './leave-request/leaverequest.component';

const routes: Routes = [
  {path:'user',component:UserComponent},
  {path:'leave-request',component:LeaverequestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
