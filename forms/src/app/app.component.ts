import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';

 // cat = {breed: "Siiami kass", firstname: "Garfield", picture: "www.catpicture.ee"};
  //cat = {};

  cats = [
    {breed: "Siiami kass", firstname: "Garfield", picture: "https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg"},
    {breed: "La Cranche", firstname: "Miisu", picture: "https://static.scientificamerican.com/sciam/cache/file/92E141F8-36E4-4331-BB2EE42AC8674DD3_source.jpg"},
    {breed: "Siiami kass", firstname: "Garfield", picture: "https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg"}
  ];

  onSubmit(contactForm) {
    console.log(contactForm.value);
    let cat = contactForm.value;
    console.log(cat);
    console.log(this.cats);
    this.cats.push(cat);
    console.log(this.cats);
  }



}
