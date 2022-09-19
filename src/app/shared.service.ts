import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://localhost:5000/api"

  constructor(private http:HttpClient) { }

  getAllUsers():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/User');
  }

  addUser(val:any){
    return this.http.post(this.APIUrl+'/User',val);
  }

  editUser(val:any){
    return this.http.put(this.APIUrl+'/User',val);
  }

  getUserById(val:any):Observable<any>{
    return this.http.get<any>(this.APIUrl+'/User',val);
  }

  getAllLeaveRequests():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/LeaveRequest');
  }

  addLeaveRequest(val:any){
    return this.http.post(this.APIUrl+'/LeaveRequest',val);
  }

  editLeaveRequest(val:any){
    return this.http.put(this.APIUrl+'/LeaveRequest',val);
  }

  getLeaveRequestById(val:any):Observable<any>{
    return this.http.get<any>(this.APIUrl+'/LeaveRequest',val);
  }
}
