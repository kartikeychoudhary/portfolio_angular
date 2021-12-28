import { Component, Input, OnInit } from '@angular/core';
import { MessagingService } from 'src/app/services/messaging.service';

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.css']
})
export class FooterSectionComponent implements OnInit {
  @Input() footer;  
  constructor(private messagingService:MessagingService) { }

  scrollToSection(href){
    this.messagingService.scrollToSection(href);
  }

  ngOnInit(): void {
  }

}
