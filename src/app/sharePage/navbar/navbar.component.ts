import { Component, OnInit } from '@angular/core';

declare const show: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

   menuV: boolean = false;

  onClick(){
    this.menuV =! this.menuV;
  }
  ngOnInit() {
    
  }

}
