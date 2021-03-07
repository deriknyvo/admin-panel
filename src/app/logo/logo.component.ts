import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  @Input() src: string;
  @Input() alt: string;
  @Input() width: string;

  constructor() { }

  ngOnInit(): void {
  }

}
