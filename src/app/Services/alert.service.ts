import { Injectable } from '@angular/core';
import { confirm , alert, custom } from 'devextreme/ui/dialog';

@Injectable()
export class AlertService {

  constructor() {
    
  }

//Confirm
 public ConfirmAlert(Message,title): Promise<boolean> {
    var Confirmresult = confirm(Message, title);
      
    return new Promise<boolean>((resolve, reject) => {
      Confirmresult.done(function (dialogResult) {
        resolve(dialogResult);
      });
   
    });
  }

  public Logout(Message,title): Promise<boolean> {
    var Confirmresult = confirm(Message, title);
      
    return new Promise<boolean>((resolve, reject) => {
      Confirmresult.done(function (dialogResult) {
        resolve(dialogResult);
      });
   
    });
  }




 //Alerts
  public SuccessAlert(Message:string,Title:string): Promise<boolean>{
   var Successresult = alert(Message,Title);

   return new Promise<boolean>((resolve, reject) => {
    Successresult.done(function () {
      resolve(Successresult);
    });
 
  });
  }


  public ConnectionAlert(Message:string,Title:string): Promise<boolean>{
    var Connectionresult = alert(Message,Title);
 
    return new Promise<boolean>((resolve, reject) => {
      Connectionresult.done(function () {
       resolve(Connectionresult);
     });
  
   });
   }


   public LoginFailed(Message:string,Title:string): Promise<boolean>{
    var LoginFailedresult = alert(Message,Title);
 
    return new Promise<boolean>((resolve, reject) => {
      LoginFailedresult.done(function () {
       resolve(LoginFailedresult);
     });
  
   });
   }


   public ServerError(Message:string,Title:string): Promise<boolean>{
    var ServerErrorresult = alert(Message,Title);
 
    return new Promise<boolean>((resolve, reject) => {
      ServerErrorresult.done(function () {
       resolve(ServerErrorresult);
     });
  
   });
   }


   public InfoAlert(Message:string,Title:string): Promise<boolean>{
    var InfoAlertresult = alert(Message,Title);
 
    return new Promise<boolean>((resolve, reject) => {
      InfoAlertresult.done(function () {
       resolve(InfoAlertresult);
     });
  
   });
   }


   public FailAlert(Message:string,Title:string): Promise<boolean>{

    var Failresult = alert(Message,Title);
  
     return new Promise<boolean>((resolve, reject) => {
      Failresult.done(function () {
        resolve(Failresult);
      });
   
    });
    }


}
