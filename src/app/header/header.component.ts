import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  isMenuCollapsed = true;
  menu: any;
  constructor(private route: Router) {}

  ngOnInit() {
    // Check if the current route is the home component
    this.route.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.handleRouterChange();
      }
    });
  }
  handleRouterChange() {
    const currentUrl: string = this.route.url;
    console.log('Current URL:', currentUrl);
    this.menu = currentUrl;
    // Code to be executed when the router link changes
  }

  scrollToTop() {
    window.scrollTo({ top: 800, behavior: 'smooth' });
  }
}
