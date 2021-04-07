import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mode  = new FormControl('side');
  panelOpenState = false;

  opened: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openedSidenav(): void {
    console.log("Abierto");

  }

}
