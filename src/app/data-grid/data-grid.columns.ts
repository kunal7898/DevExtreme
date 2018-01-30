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
        columns.push({width :80, allowFiltering:true,allowSorting:true,dataField:eachObj["code"],caption:eachObj["code"]})
    }
        if (eachObj["AttributeType"]=='string'){
        columns.push({width :100, allowFiltering:true,allowSorting:true,dataField:eachObj["code"],caption:eachObj["code"]})
    }
    if (eachObj["AttributeType"]=='date'){
        columns.push({width :80, allowFiltering:true,allowSorting:true,dataField:eachObj["code"],caption:eachObj["code"],dataType:'date'})
    }

    if(eachObj["AttributeType"]=='Lookup'){
        let tempData = JSON.parse(localStorage.getItem(eachObj["PicklistMasterId"]));  
        columns.push({width :100, allowFiltering:true,allowSorting:true, lookup: {
            dataSource:tempData,
            valueExpr: "ID",
            displayExpr: "Name"
        },dataField:eachObj["code"],caption:eachObj["code"]});
        
    }
   })

   return columns;

   }

   


}