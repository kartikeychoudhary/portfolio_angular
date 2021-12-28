import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent implements OnInit {
  @Input() img;
  @Input() description;
  @Input() information:[];
  @Input() cv:string;

  constructor() { }

  ngOnInit(): void {
  }

}
