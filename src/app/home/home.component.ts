import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public menus: any[] = [
    {
      icon: 'account_box',
      active: false
    },
    {
      icon: 'question_answer',
      active: false
    },
    {
      icon: 'people',
      active: false
    },
    {
      icon: 'contacts',
      active: false
    },
    {
      icon: 'settings',
      active: false
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectMenu(menu) {
    this.menus.forEach(menu => menu.active = false);
    
    menu.active = true;
  }
}
