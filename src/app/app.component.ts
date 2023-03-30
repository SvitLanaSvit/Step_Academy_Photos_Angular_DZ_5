import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoProbeAngular';
  quote = '«Patience is a key element of success», Bill Gates';
  quotesGates: string[] = [
    'https://en.wikipedia.org/wiki/Bill_Gates',
    'https://www.gatesfoundation.org/',
    'https://www.gatesnotes.com/',
    'https://twitter.com/billgates'
  ]
}
