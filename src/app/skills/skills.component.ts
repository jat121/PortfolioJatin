import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillsSection = {
    title: "What I do💁‍♂️",
    subTitle: "CRAZY DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
      "⚡ Develop highly interactive Front end for your web applications",
      "⚡ Data Structures & Algorithms",
      "⚡ Good at various Programming Languages such as Java, JS, TS, HTML, CSS",
      "⚡ Beginner at MongoDB & Firebase",
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
