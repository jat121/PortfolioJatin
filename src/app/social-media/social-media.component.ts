import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  socialMediaLinks = {

    github: "",
    linkedin: "",
    gmail: "jatinpal4014@gmail.com",
    instagram : "https://www.instagram.com/jat_121",
  };
  constructor() { }

  ngOnInit(): void {
  }

}
