import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillsSection = {
    title: "What I doðââï¸",
    subTitle: "CRAZY DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
      "â¡ Develop highly interactive Front end for your web applications",
      "â¡ Data Structures & Algorithms",
      "â¡ Good at various Programming Languages such as Java, JS, TS, HTML, CSS",
      "â¡ Beginner at MongoDB & Firebase",
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
