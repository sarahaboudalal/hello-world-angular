import { Component, VERSION } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css'],
})
export class AppHomeComponent {
  clicked = false;
  title = `Angular ${VERSION.full} is ready!`;

  persons = of([
    {
      name: 'Sarah',
      year: 1999,
      location: 'Lebanon',
    },
    {
      name: 'Heba',
      year: 1987,
      location: 'Lebanon',
    },
  ]);

  handleClick() {
    this.clicked = !this.clicked;
  }
}
