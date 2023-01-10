import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  display:any=[]
  inp:string='';
  dlte:boolean=false;
  add(){
    console.log(this.inp)
    this.display.push(this.inp);
    console.log(this.display);
    this.inp='';
  }

  dlt(){
    
  }
}
