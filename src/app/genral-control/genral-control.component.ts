import { Component } from '@angular/core';

@Component({
  selector: 'app-genral-control',
  templateUrl: './genral-control.component.html',
  styleUrls: ['./genral-control.component.css']
})
export class GenralControlComponent  {
employees:any[];
  constructor() { 
    this.employees=[
      {
        
        Code : 'emp1',
        Name: 'jayesh',
        Gender: 'Male',
        BirthDate: '1964/03/16'
      },
      {
        
        Code : 'emp2',
        Name: 'jayesh zawar',
        Gender: 'Male',
        BirthDate: '1988/03/16'
      },
      {
       
        Code : 'emp3',
        Name: 'jay',
        Gender: 'Female',
        BirthDate: '1981/04/16'
      }, {
        
        Code : 'emp4',
        Name: 'abc',
        Gender: 'Male',
        BirthDate: '2001/03/10'
      }];
    }
}
