import {Component} from '@angular/core';

@Component({
  //represents a custom html tag
selector: 'app-root',
//source of html scructure
templateUrl: 'app.component.html',
//source of styles for component
styleUrls: ['app.component.css']
})

export class AppComponent {
  emoji = ['👾', '🌮', '🍕', '🍔'];
  activeEmoji: string;
  changeEmoji(){
    this.activeEmoji = this.emoji[Math.floor(Math.random() * this.emoji.length)];
  }
}
