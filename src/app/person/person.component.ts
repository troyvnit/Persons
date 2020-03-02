import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  public person: Person;

  constructor(http: HttpClient, protected route: ActivatedRoute, @Inject('BASE_URL') baseUrl: string) {
    const username = this.route.snapshot.paramMap.get('username');
    http.get<Person>(baseUrl + `users/${username}`).subscribe(result => {
      this.person = result;
    }, error => console.error(error));
  }
}


