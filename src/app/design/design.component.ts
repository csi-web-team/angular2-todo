import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {
welcome : string;
  games : [{
      game: string,
      platform : string,
      release : string
  }];
  data;
  constructor(private http: Http) {
    this.welcome = "Display List using ngFor in Angular 2"
    // Displaying users records by following restfull services
    this.http.get("https://jsonplaceholder.typicode.com/users")
      .subscribe((data)=> {
          setTimeout(()=> {
              this.data = data.json();
              console.log(this.data)
          }, 1000);
      }); 
   }

  ngOnInit() {
  }

}
