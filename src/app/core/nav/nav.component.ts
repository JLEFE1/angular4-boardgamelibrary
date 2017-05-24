/**
 * Created by JoLe on 24/05/2017.
 */
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  menuItems = [
    'Heroes',
    'Villains',
    'Other'
  ];
  ngOnInit() {  }
  constructor() { }
}
