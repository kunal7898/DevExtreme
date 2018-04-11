import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/delay';

@Injectable()
export class AsyncValidatorService {
  constructor(private http: Http) {}

  checkOrderNotTaken(email: string) {
    return this.http
      .get('https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/data/customers.json')
      .map(res => res.json())
      .map(users => users.filter(user => user.email === email))
      .map(users => !users.length);
  }
}
