import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';

interface Language {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  selectedValue: string;

  languages: Language[] = [
    { value: 'eng-0', viewValue: 'ENG' },
    { value: 'hindi-1', viewValue: 'HIN'},
    { value: 'french-2', viewValue: 'FRE' }
  ];

  faHome = faHome;

  years: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
