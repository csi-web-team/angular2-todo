import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  sub;
  userId;
  data;
  constructor(private route: ActivatedRoute,
    private router: Router, private http: Http) {
     
   }

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.userId = +params['userId'] || 0;
        console.log(this.userId)
          this.http.get("https://jsonplaceholder.typicode.com/todos?userId="+this.userId)
            .subscribe((data)=> {
                setTimeout(()=> {
                    this.data = data.json();
                    console.log(this.data)
                }, 1000);
            });
        //https://jsonplaceholder.typicode.com/todos?userId=1
      });
  }
  
}
