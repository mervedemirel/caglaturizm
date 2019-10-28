import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {MailService} from '../../../services/mail.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navbarOpen = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.navbarOpen = false;
      }
    });
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
