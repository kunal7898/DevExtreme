import { Employe, DataGridService } from './../data-grid.service';
import { Input } from "@angular/core";
import { Promise } from "q";
import { forEach } from '@angular/router/src/utils/collection';

export class GridColumns{

EMPLOYEES: Employe[];
_Width: number;
_allowFiltering:boolean;
_allowSorting:boolean;
_cellTemplate:string;
_dataField:string;
_caption:string;

constructor(){
    
}
   getColumns(){
    
   let columns = new Array<object>();
   let obj = new DataGridService();
   
   obj.getColumns().forEach((eachObj) => {
       
        if (typeof eachObj=='number'){
        columns.push({_Width :20, _allowFiltering:true,_allowSorting:true,_dataField:eachObj,_cellTemplate:'none'})
    }
        if (typeof eachObj=='string'){
        columns.push({_Width :50, _allowFiltering:true,_allowSorting:true,_dataField:eachObj,_cellTemplate:'none'})
    }
   })

   return columns;

   }

   


}