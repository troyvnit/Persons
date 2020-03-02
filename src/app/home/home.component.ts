import { Component, Inject } from '@angular/core';
import { Person } from '../models/person.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public persons: Person[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Person[]>(baseUrl + 'users').subscribe(result => {
      this.persons = result;
    }, error => console.error(error));
  }
}
