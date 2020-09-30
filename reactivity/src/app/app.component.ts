import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:
  [trigger("checkState",[
  state("normal",style({
      "background-color": "red",  
      opacity: 0.2,
  })), 
  state("modified",style({
      "background-color": "green",
      "border-radius":  "50%",
      "opacity": "1",
      "transform": "translateX: 100px",
   })), 

  transition('normal => modified', animate(1500)),
  
  transition('modified => normal', animate(500))
  
    ])]
  
  })

export class AppComponent {
  title = 'reactivity';
  muutuja;

  likeMuutuja = false;

  onKlikk() {
    this.likeMuutuja = !this.likeMuutuja;
  }

  isNormal: string;

  onDivClick() {
    if (this.isNormal == "normal") {
      this.isNormal = "modified";
    } else {
      this.isNormal = "normal";
    }
  }
}
