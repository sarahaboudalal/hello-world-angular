import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css'],
})
export class AppHomeComponent {
  clicked = false;
  title = `Angular ${VERSION.full} is ready!`;

  persons = [
    {
      name: 'Sarah',
      age: 24,
      location: 'Lebanon',
    },
    {
      name: 'Heba',
      age: 36,
      location: 'Lebanon',
    },
  ];

  handleClick() {
    this.clicked = true;
  }
}
