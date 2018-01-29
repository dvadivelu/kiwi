import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Task} from './app.task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private task_data: any = null;
  private user_data: any = null;
  private task_addressURL = 'assets/data.json';
  private user_addressURL = 'assets/users.json';
  private taskObj: Task;
  private setClickedRow: Function;

  constructor(private _http: Http) {
    this.taskObj = new Task();
    this.loadTaskData();
    // this.loadUserData();
    console.log('load page');
    this.setClickedRow = function(index) {
           this.taskObj = this.task_data[index];
           console.log(this.taskObj);
       };
  }

  private completeTaskData(index) {
    this.taskObj = this.task_data[index];
    console.log(this.taskObj);
    this.taskObj.completed = true;
    this.saveTaskData();
    return true;
  }

  private saveTaskData() {
    const url = 'http://localhost:8080/';
    const header = new Headers({'Content-Type': 'application/json'});
    console.log(this.taskObj);
     this._http.post(url, JSON.stringify(this.taskObj), {headers: header})
    .map((res: Response) => res.json()).subscribe(data => {
          console.log(data);
      });
    this.taskObj = new Task();
    this.loadTaskData();
    console.log('Task Saved');
    return true;
  }

  private loadUserData() {
    return this._http.get(this.user_addressURL).map((res: Response) => res.json())
      .subscribe(data => {
        this.user_data = data;
        console.log(this.user_data);
      });
  }
  private loadTaskData() {
    console.log('loading Task Data');
    const url = 'http://localhost:8080/';
    return this._http.get(url).map((res: Response) => res.json())
      .subscribe(data => {
        this.task_data = data;
        console.log(this.task_data);
      });
  }
}
