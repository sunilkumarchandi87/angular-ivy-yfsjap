import { Component, VERSION } from '@angular/core';
//import mydata from './testjson.json';

interface MyInterface {
  id: Number;
  firstname: String;
  lastname: String;
  email: String;
  gender: String;
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  //mydatalst: MyInterface[] = mydata;
}
