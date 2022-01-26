import { Component, Input, OnInit, ViewChild } from '@angular/core';
// import * as $ from 'jquery';
// import {flipCover} from "./test.js"
@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {
  @Input() link:any;
  text: "SEE ME!";
  constructor() { }

  ngOnInit(): void {
    // this.onTag(/);
  }


}
