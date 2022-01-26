import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prjs',
  templateUrl: './prjs.component.html',
  styleUrls: ['./prjs.component.scss']
})
export class PrjsComponent implements OnInit {
  prjs = [
    {
      Name:"Web Group Chat Application",
      Technologies_Used: "Using ReactJs | JS | Chat Engine Api",
      color: "gold",
      companylogo: "..//..//assets/images/25540.jpg",
      touch_me: "https://jatingroupchatapp.netlify.app/",
      desc: "This is a chat application can be used for having conversations in groups with friends by sharing images, texts and many more features",
      },
    {
      Name:"Recipe & Shopping App",
      Technologies_Used: "Using Angular",
      color: "beige",
      companylogo: "..//..//assets/images/cook-book.png",
      touch_me: "null",
      desc: "This is a app that can be used by one for managing recipes of there fav food and shopping lists of the products. Good for managing food",

    },
    {
      Name:"Portfolio",
      Technologies_Used: "Using Angular",
      color: "pink",
      companylogo: "..//..//assets/images/professional-portfolio.png",
      touch_me: "null",
      desc: "This is a app that can be used by one for managing recipes of there fav food and shopping lists of the products. Good for managing food",
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
