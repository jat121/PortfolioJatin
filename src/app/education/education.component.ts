import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  timeline = [
    // {
    //   heading: "Infosys",
    //   duration: "Present",
    //   subtitle: "",
    //   content: "Upcoming Full stack develover at Infosys!",
    //   className1: "mar-left",
    //   className2: "prt_about_learnbox_right"
    // },

    {
      heading: "B.Tech - Electronics & Communication Engineering",
      duration: "2018 - ",
      subtitle: "GGSIPU, Delhi",
      content: "Ongoing B.Tech. in Electronics from HMRITM(GGSIPU), Delhi.",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    },
    {
      heading: "Higher Secondary(12th)",
      duration: "2017",
      subtitle: "CBSE Board",
      content: "Successfully completed my 12th standard studies in 2017 from David Model Sr. Secondary School, Delhi.\n" +
        "Major: PCM.",
      className1: "mar-left",
      className2: "prt_about_learnbox_right"
    },
    {
      heading: "Secondary Stage(10th)",
      duration: "2015",
      subtitle: "CBSE Board",
      content: "Successfully completed my high school studies in 2015 from David Model Sr. Secondary School, Delhi.",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
