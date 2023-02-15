import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopping';

  loadedData = 'recipe';

  onNavigate(selector: string) {
    this.loadedData = selector;
  }
}
