import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AnimalComponent } from './animal/animal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, AnimalComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'lab_angular_classes';
}