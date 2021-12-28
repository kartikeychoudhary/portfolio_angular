import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css']
})
export class SkillsSectionComponent implements OnInit {


  @Input() skills:[];

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  openSkill(event){
    if(this.document.getElementById(event).classList.contains("skills__close")){

      this.document.getElementById(event).classList.remove("skills__close");
      this.document.getElementById(event).classList.add("skills__open");

      // this.document.getElementById(event+'-icon').classList.replace("uil-angle-down", "uil-angle-up");
    }else{
      this.document.getElementById(event).classList.remove("skills__open");
      this.document.getElementById(event).classList.add("skills__close");

      // this.document.getElementById(event+'-icon').classList.replace("uil-angle-up", "uil-angle-down");
    }
  }

  closeSkill(event){
    
  }

}
