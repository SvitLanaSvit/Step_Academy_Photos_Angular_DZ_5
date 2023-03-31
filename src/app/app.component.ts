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
  ];
  photos: string[] = [
    '../assets/BugattiVeyron.jpg',
    '../assets/Logo.jpg',
    '../assets/EttoreBugatti.jpg'
  ]
  names: string[] = [
    'BugattiVeyron',
    'Logo',
    'EttoreBugatti'
  ]
  photosToFile: Photo[] = [
    {url: this.photos[0], name: this.names[0]},
    {url: this.photos[1], name: this.names[1]},
    {url: this.photos[2], name: this.names[2]}
  ]
}

class Photo{
  url: string;
  name: string;

  constructor(url: string, name: string){
    this.name = name;
    this.url = url;
  }
}
