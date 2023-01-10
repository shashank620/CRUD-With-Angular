import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CRUDComponent  {
  allUser: Object | any;
  isDarkTheme:boolean=false;
  showPass:boolean=false;
  password:boolean=false;
  push:any;
  table:boolean=false;
  main:boolean=true;
  empty:any=[];
  userObj={
    name:'',
    mobile:'',
    email:'',
    password:'',
    id:''
  }
  // const JSON = JSON.stringify(this.userObj);
  isEdit:boolean=false;
  value: any;
  constructor (private commonService:CommonService){

  }
  toggle(){
    this.isDarkTheme=!this.isDarkTheme;
  }

  ngOnInit(){
    this.getLatestUser();
    console.log("::userObj",this.userObj);
  }
  
  addUser(formObj: any){
    console.log(formObj)
    this.commonService.createUser(formObj).subscribe((response)=>{
      this.getLatestUser();
      this.main=false;
      this.table=true;
      // this.empty.push(this.userObj.password)
      // var star:any=this.userObj.password
      // star=star.split('')
      // this.push= star.map((value:any)=>
      //   '*'
      // ).join('*')
      
      // console.log("::push",this.push)
      // console.log("::empty",this.push);
      this.userObj.name='';
      this.userObj.mobile='';
      this.userObj.email='';
      this.userObj.password='';
      localStorage.setItem("userObj", JSON.stringify(this.allUser))

    })
  }
  getLatestUser(){
    this.commonService.getUser().subscribe((response)=>{
      this.allUser=response;
    })
  }

  deleteUser(user:any){
    this.commonService.deleteUser(user).subscribe(()=>{
      this.getLatestUser()
    })
  }
  editUser(user:any){
    this.userObj=user;
    this.isEdit=true;
    this.table=false;
    this.main=true;
  }
  updateUser(){
    this.isEdit=!this.isEdit;
    this.commonService.updateUser(this.userObj).subscribe(()=>{
        this.getLatestUser();
        this.userObj.name='';
        this.userObj.mobile='';
        this.userObj.email='';
        this.userObj.password='';
        this.table=true;
        this.main=false;
    })
  }
  
  show_hide(){
    this.showPass=!this.showPass;
    
  }
  display(){
    this.userObj.password
  }
}
