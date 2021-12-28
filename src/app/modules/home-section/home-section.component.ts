import { Component, Input, OnInit } from '@angular/core';
import { MessagingService } from 'src/app/services/messaging.service';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.css']
})
export class HomeSectionComponent implements OnInit {
  @Input() socialItems:[];
  @Input() prefilImageUrl:string;
  @Input() title:string;
  @Input() subtitle:string;
  @Input() description:string;
  
  constructor(private messagingService:MessagingService) { }

  scrollToSection(href){
    this.messagingService.scrollToSection(href);
  }

  ngOnInit(): void {
  }

}
