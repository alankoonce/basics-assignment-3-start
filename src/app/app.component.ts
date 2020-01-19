import { Component } from '@angular/core';
import { time } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .white {
    color: white;
  }
  `]

})
export class AppComponent {
  displayDetails = false;
  clicks = [];
  current_time = new Date();

  processClick() {
    this.clicks.push(new Date());
    this.displayDetails = this.displayDetails ? false : true;
  }

  getBackgroundColor(idx) {
    return idx > 3 ? 'blue' : 'white';
  }
}
