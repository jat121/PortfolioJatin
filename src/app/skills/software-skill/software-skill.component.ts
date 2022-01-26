import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-software-skill',
  templateUrl: './software-skill.component.html',
  styleUrls: ['./software-skill.component.scss']
})
export class SoftwareSkillComponent implements OnInit {
  skillsSection = {
    softwareSkills: [
      {
        skillName: "JAVA",
        src:"https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v2.gif"
        // src:"..//..//..//assets/images/icons8-java.gif"
      },
      {
        skillName: "DS Algo",
        src:"https://img.icons8.com/cotton/64/000000/source-code--v2.png"
      },
      {
        skillName: "JavaScript",
        src: "https://img.icons8.com/color/48/000000/javascript--v2.gif"
      },
      {
        skillName: "TypeScript",
        src: "https://img.icons8.com/color/48/000000/typescript.png"

      },
      {
        skillName: "Angular",
        // src: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/000000/external-angular-a-typescript-based-open-source-web-application-framework-logo-shadow-tal-revivo.png"
        src:"..//..//..//assets/images/angular-icon.svg"
      },
      {
        skillName: "ReactJs",
        src: "https://img.icons8.com/ultraviolet/40/000000/react--v2.gif"
      },
      {
        skillName: "html-5",
        src: "https://img.icons8.com/ios/50/000000/html-filetype--v2.gif"
      },
      {
        skillName: "css3",
        fontAwesomeClassname: "fab fa-css3-alt"
      },
      {
        skillName: "npm",
        fontAwesomeClassname: "fab fa-npm"
      },

      // {
      //   skillName: "Tensorflow",
      //   fontAwesomeClassname: "logos-tensorflow"
      // },
      // {
      //   skillName: "Firebase",
      //   fontAwesomeClassname: "simple-icons:firebase"
      // }

    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
