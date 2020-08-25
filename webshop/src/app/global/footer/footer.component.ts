import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  clock = new Date();

  constructor() { }

  ngOnInit(): void {
    setInterval(function(){
      this.clock = new Date();
    }, 1000);
  }

}
