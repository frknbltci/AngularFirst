import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//<app-root></app-root> gibi kullanabilirsin demek selector
  templateUrl: './app.component.html', // o komponentin datalarını yöneticez demek 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'northwind';
  user: string = "Furkan Baltacı";
}
