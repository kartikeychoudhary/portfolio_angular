import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-qualifications-section',
  templateUrl: './qualifications-section.component.html',
  styleUrls: ['./qualifications-section.component.css']
})
export class QualificationsSectionComponent implements OnInit {

  @Input() qualifications;  
  symbol;
  active=0;

  constructor() {
    
   }

  decodeDescription(description){
    description=description.replaceAll(this.symbol, "</li><li>");
    description=description.substring(5);
    return `<ul>${description}</li></ul>`
  }

  ngOnInit(): void {
    this.symbol = this.qualifications['list_start_symbol'];
  }

  onClickTitle(selected){
    this.active=selected
  }

}
