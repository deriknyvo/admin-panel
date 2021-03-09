import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectMenuService {

  private menuSelected = new Subject();

  constructor() { }
}
