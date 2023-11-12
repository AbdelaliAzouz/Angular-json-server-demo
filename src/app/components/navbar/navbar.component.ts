import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  navData: Array<any> = [
    {
      label: 'Home',
      icon: 'bi bi-house',
      route:'/home'
    },
    {
      label: 'Products',
      icon: 'bi bi-archive',
      route:'/products'
    },
    {
      label: 'Add product',
      icon: 'bi bi-plus-circle',
      route:'/add-product'
    }
  ];
}
