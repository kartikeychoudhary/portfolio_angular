import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-qualifications-section',
  templateUrl: './qualifications-section.component.html',
  styleUrls: ['./qualifications-section.component.css']
})
export class QualificationsSectionComponent implements OnInit {

  @Input() qualifications;  
  symbol;
  active=0;
  smallScreenWidth=318;
  @ViewChild('qualification__container') container : ElementRef;


  constructor(private cdr:ChangeDetectorRef) {
    
   }

  decodeDescription(description){
    description=description.replaceAll(this.symbol, "</li><li>");
    description=description.substring(5);
    return `<ul>${description}</li></ul>`
  }

  ngOnInit(): void {
    this.symbol = this.qualifications['list_start_symbol'];
    
  }

  ngAfterViewInit() {
    // console.log(this.container)
    if(this.container.nativeElement.offsetWidth<=this.smallScreenWidth){
      this.qualifications['titles'].forEach(title => {
        this.qualifications[title]["data"].forEach((item, index) => {
          this.qualifications[title]["data"][index]["placement"]="left";
        });
      });
      this.cdr.detectChanges();
      console.log(this.qualifications)
    }
  }

  onClickTitle(selected){
    this.active=selected
  }

}
