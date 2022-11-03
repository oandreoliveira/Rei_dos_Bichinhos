import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './component.html'


})
export class AppComponent {
  title = 'Rei_Bichinhos';

  onActivate(event: Event) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
