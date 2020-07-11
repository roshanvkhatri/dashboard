import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'home',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/home.svg'));

    iconRegistry.addSvgIcon(
      'dashboard',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/dashboard.svg'));

    iconRegistry.addSvgIcon(
      'calender',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/calender.svg'));

    iconRegistry.addSvgIcon(
      'arrowdown',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/arrow_down.svg'));
      
    iconRegistry.addSvgIcon(
      'arrowup',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/arrow_up.svg'));    
      
      iconRegistry.addSvgIcon(
      'settings',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/settings.svg'));
  }
}
