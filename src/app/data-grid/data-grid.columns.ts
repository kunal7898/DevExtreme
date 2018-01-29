import { Employe, DataGridService } from './../data-grid.service';
import { Input } from "@angular/core";
import { Promise } from "q";
import { forEach } from '@angular/router/src/utils/collection';

export class GridColumns{

EMPLOYEES: Employe[];
width: number;
allowFiltering:boolean;
allowSorting:boolean;
cellTemplate:string;
dataField:string;
caption:string;

constructor(){
    
}
  public static getColumns(){
    
   let columns = new Array<object>();
   let obj = new DataGridService();
   
   obj.getColumns().forEach((eachObj) => {
       
        if (eachObj["AttributeType"]=='number'){
        columns.push({width :20, allowFiltering:true,allowSorting:true,dataField:eachObj["code"],caption:eachObj["code"]})
    }
        if (eachObj["AttributeType"]=='string'){
        columns.push({width :50, allowFiltering:true,allowSorting:true,dataField:eachObj["code"],caption:eachObj["code"]})
    }
   })

   return columns;

   }

   


}