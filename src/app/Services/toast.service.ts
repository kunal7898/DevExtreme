import { Injectable } from '@angular/core';
import notify from 'devextreme/ui/notify';



@Injectable()
export class ToastService {


 private AlertType:any=null;
 private Position:any=null;

  constructor() {
    this.CreateAlertParms();
   }

  public SuccessNotify(SuccessMessage:string,DisplayTime:number,Position:Array<any>){
     if(Position==null){
      this.Position={
        my: "center top",
        at: "center top"
      }
     }
      notify({message:SuccessMessage,position:this.Position},this.AlertType.get("SuccessType"),DisplayTime);
  }

  public ErrorNotify(ErrorMessage:string,DisplayTime:number,Position:Array<any>){
    if(Position==null){
      this.Position={
        my: "center top",
        at: "center top"
      }
     }
    notify({message:ErrorMessage,position:this.Position},this.AlertType.get("ErrorType"), DisplayTime);
}

  private CreateAlertParms(){
    this.AlertType = new Map().set("SuccessType","success").set("ErrorType","error");
  }



}
