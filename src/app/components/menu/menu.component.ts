import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {

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
