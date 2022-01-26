import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public workExperiences = {
    viewExperiences: true,
    experience: [
      // {
      //   role: "TA Intern DSA",
      //   company: "",
      //   color: "#ff9102",
      //   companylogo: "..//..//..//assets/images/mech.png",
      //   date: "Dec 2022 – Feb 2022",
      //   desc: "The training focused on front-end web development and I learned to work in a team by working with live projects",

      // },

      {
        role: "Software Developer Intern",
        company: "Mechlin Software Technology Pvt. Ltd.",
        color: "#ff9102",
        companylogo: "..//..//..//assets/images/mech.png",
        date: "Dec 2022 – Feb 2022",
        desc: "The training focused on front-end web development and I learned to work in a team by working with live projects",
        },
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
