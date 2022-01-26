import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contactInfo = {
    title: "Contact Me ☎️",
    subtitle: "Discuss a project or just want to say hellu? My Inbox is open for all.",
    number: "+91-9315639487",
    email_address: "jatinpal4014@gmail.com"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
