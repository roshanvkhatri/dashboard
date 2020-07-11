import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isCollapsed = true;

  constructor() { }

  // tslint:disable-next-line: typedef
  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit(): void {
  }

}
