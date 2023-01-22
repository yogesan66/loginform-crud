import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(private http : HttpClient) { }

  postDetails(data:any){
   return  this.http.post('http://localhost:3000/loginDetails',data)
  }

  getDetails(){
    return this.http.get('http://localhost:3000/loginDetails')
  }

  deleteDetails(id:any){
    return this.http.delete('http://localhost:3000/loginDetails/'+id)
  }
}
