import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  timeline = [
    {
      heading: "B.Tech",
      duration: "2018 - 2022",
      content: "Ongoing B.tech in Electronics & Communication Engineering from GGSIPU(HMR Institute of Technology & Management), Delhi.",
      className: "direction-l"
    },
    {
      heading: "Intermediate",
      duration: "2016-2017",
      content: "Successfully completed my intermediate studies in 2017 from David Model Sr. Secondary School, Delhi.\n" +
        "Major: PCM.",
      className: "direction-r"
    },
    {
      heading: "High School",
      duration: "2014-2015",
      content: "Successfully completed my high school studies in 2015 from David Model Sr. Secondary School, Delhi.",
      className: "direction-l"
    }

    ]
  constructor() { }

  ngOnInit(): void {
  }

}
