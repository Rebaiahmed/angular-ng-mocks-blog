import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-dependencies',
  templateUrl: './dependencies.component.html',
  styleUrls: ['./dependencies.component.css']
})
export class DependenciesComponent {

  userName; 
   formdata;
   constructor(private http: HttpClient) { }
   ngOnInit() { 

        // Make a GET request with some query parameters
    const params = new HttpParams().set('param1', 'value1').set('param2', 'value2');
    this.http.get('/api/data', { params }).subscribe(data => console.log(data));

    // Make a POST request with some data and headers
    const token ="token"
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    const body = { name: 'John', age: 30 };
    this.http.post('/api/save', body, { headers }).subscribe(result => console.log(result));
      this.formdata = new FormGroup({ 
         userName: new FormControl("Tutorialspoint")
      }); 
   } 
   onClickSubmit(data) {this.userName = data.userName;}

}
