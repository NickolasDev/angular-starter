import {Component, OnInit} from '@angular/core';
import {NavOptions} from '../../component/navbar/navbar.component';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  constructor() {
  }

  navOptions: NavOptions = [
    {
      label: 'Home',
      routerLink: ['home'],
      icon: 'dashboard'
    },
    {
      label: 'Sair',
      action: this.logout,
      icon: 'keyboard_return'
    }
  ];

  ngOnInit() {
  }


  logout(el: NavOptions) {
    console.log(el);
    // TODO
  }

}
