import { ChangeDetectionStrategy, Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideMenuComponent implements OnInit {

  @Output() menuSelected = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
}
