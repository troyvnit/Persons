import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  public pageName: string;
  public isBackVisible: boolean = false;

  constructor(protected router: Router, protected location: Location) {
    this.router.events.subscribe((val) => {
      const url = this.router.url;
      if (url === '/') {
        this.pageName = 'Home';
        this.isBackVisible = false;
      } else {
        this.pageName = 'Person';
        this.isBackVisible = true;
      }
    });
  }

  back() {
    this.location.back();
  }
}
