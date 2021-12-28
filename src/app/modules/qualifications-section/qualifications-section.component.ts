import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-qualifications-section',
  templateUrl: './qualifications-section.component.html',
  styleUrls: ['./qualifications-section.component.css']
})
export class QualificationsSectionComponent implements OnInit {

  @Input() qualifications;

  active=0;

  constructor() { }

  ngOnInit(): void {
  }

  onClickTitle(selected){
    this.active=selected
  }

}
