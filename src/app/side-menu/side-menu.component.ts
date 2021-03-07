import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

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
