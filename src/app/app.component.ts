import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TransferService } from 'src/service/transfer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private service: TransferService){}
 
  loginForm:FormGroup | any;

  storage_list :any = []

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      Username : new FormControl(''),
      Password : new FormControl('')
    })
  }

  onsubmit(){
    let data = this.loginForm.value;
    // this.storage_list.push(data);
    // console.log(this.storage_list);
    this.service.postDetails(data).subscribe(res =>{

      this.loginForm.reset();
      console.log(res)
      this.view()
    })
   
  }



  view(){
   this.service.getDetails().subscribe(res=>{
    this.storage_list = res
   })
  }

  delete(id:any){
   this.service.deleteDetails(id).subscribe(res=>{
 
    this.view()
   })
  }

  
 
}
