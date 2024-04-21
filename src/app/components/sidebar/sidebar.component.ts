import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  // imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  pages = [
    { name: 'Home', routerLink: '/landing-page', icon: 'fa fa-home' },
    { name: 'About', routerLink: '/about', icon: 'fa fa-info-circle' },
    { name: 'Contact', routerLink: '/contact', icon: 'fa fa-envelope' },
    { name: 'Services', routerLink: '/services', icon: 'fa fa-cogs' },
    { name: 'Products', routerLink: '/products', icon: 'fa fa-shopping-bag' },
    { name: 'Gallery', routerLink: '/gallery', icon: 'fa fa-image' },
    { name: 'Blog', routerLink: '/blog', icon: 'fa fa-newspaper-o' },
  ];
}
