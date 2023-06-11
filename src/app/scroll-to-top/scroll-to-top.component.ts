import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css'],
})
export class ScrollToTopComponent {
  showScroll = false;

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Listen to the window scroll event to show/hide the scroll-to-top button
  @HostListener('window:scroll')
  onWindowScroll() {
    this.showScroll =
      (window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop) > 300;
  }
}
