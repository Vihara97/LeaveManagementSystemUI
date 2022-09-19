import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  constructor(private service:SharedService) { }

  UserList:any=[];

  ngOnInit(): void {
    this.refreshUserList();
  }

  refreshUserList(){
    this.service.getAllUsers().subscribe(data =>{
      this.UserList=data;
    });
}

}
