import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prjs-func',
  templateUrl: './prjs-func.component.html',
  styleUrls: ['./prjs-func.component.scss']
})
export class PrjsFuncComponent implements OnInit {
  @Input() prj:any;
  constructor() { }

  ngOnInit(): void {
  }

}
