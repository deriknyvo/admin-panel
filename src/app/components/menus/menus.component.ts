import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenusComponent implements OnInit {

  public menus: any[] = [
    {
      icon: 'account_box',
      active: false,
      tooltip: 'Perfil'
    },
    {
      icon: 'question_answer',
      active: false,
      tooltip: 'Chat'
    },
    {
      icon: 'people',
      active: false,
      tooltip: 'Pessoas'
    },
    {
      icon: 'contacts',
      active: false,
      tooltip: 'Contatos'
    },
    {
      icon: 'settings',
      active: false,
      tooltip: 'Configurações'
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
