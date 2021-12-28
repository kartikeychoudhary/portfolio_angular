import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { MessagingService } from 'src/app/services/messaging.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  loader = true;
  title;
  navItems;
  socialItems;
  homeTitle;
  homeSubtitle;
  homeDescription;
  prefilImageUrl;
  aboutDescription;
  aboutInfo;
  aboutImg;
  aboutCV;
  skills;
  qualifications;
  portfolio;
  contact;
  footer;
  message="";
  showMessage=false;

  constructor(
    private messagingService: MessagingService,
    private backendSerive: BackendService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.messagingService.consumeOnToggleTheme().subscribe((theme: string) => {
      let previous = theme !== 'light-theme' ? 'light-theme' : 'dark-theme';
      if (this.document.body.classList.contains(previous)) {
        this.document.body.classList.remove(previous);
      }
      this.document.body.classList.add(theme);
    });

    this.messagingService.consumeOnToggleMenu().subscribe((bool: boolean) => {
      if (bool) {
        this.document.getElementById('nav-menu').classList.add('show-menu');
      } else {
        this.document.getElementById('nav-menu').classList.remove('show-menu');
      }
    });

    this.messagingService.consumeScrollTo().subscribe((section:string)=>{
        this.document.getElementById(section).scrollIntoView({behavior:"smooth", block: "start", inline: "nearest"});
    });

    this.messagingService.consumeShowNotification().subscribe((message:string)=>{
        this.message=message;
        this.showMessage=true;
        setTimeout(()=>{this.message="";this.showMessage=false}, 2000);
    })
  }

  scrollToSection(href){
    this.messagingService.scrollToSection(href);
  }

  ngOnInit(): void {
    this.backendSerive.getData().subscribe((res)=>{

      this.title = res['title'];
      this.navItems = res['navItems'] 
      this.socialItems = res['socialItems']
      this.homeTitle = res['homeTitle'];
      this.prefilImageUrl = res['prefilImageUrl'];
      this.homeSubtitle = res['homeSubtitle'];
      this.homeDescription = res['homeDescription'];
      this.aboutDescription = res['aboutDescription'];
      this.aboutInfo = res['aboutInfo'];
      this.aboutImg = res['aboutImg']
      this.aboutCV = res['aboutCV']
      this.skills = res['skills']
      this.qualifications = res['qualifications']
      this.portfolio = res['portfolio']
      this.contact = res['contact']
      this.footer = res['footer']

      this.loader=false;
    })
  }
}
