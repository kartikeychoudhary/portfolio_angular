import { Component, Input, OnInit } from '@angular/core';
import { MessagingService } from 'src/app/services/messaging.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title:string;
  @Input() navItems:[];

  constructor(private messagingService:MessagingService) {
    
   }

  toggle='light-theme';
  
  toggleTheme=()=>{
    let theme = this.toggle === 'light-theme' ? 'dark-theme': 'light-theme';
    this.toggle=theme;
    this.messagingService.onToggleTheme(theme);
    this.saveToLocalStorage('selected-theme', this.toggle);
  }

  saveToLocalStorage(key, value){
    localStorage.setItem(key, value);
  }

  getFromLocalStorage(key){
    return localStorage.getItem(key);
  }

  openMenu(){
    this.messagingService.onToggleMenu(true);
  }

  closeMenu(){
    this.messagingService.onToggleMenu(false);
  }

  scrollToSection(href){
    this.messagingService.scrollToSection(href);
  }

  ngOnInit(): void {
    const selectedTheme = this.getFromLocalStorage('selected-theme');
    if(!selectedTheme){
      this.saveToLocalStorage('selected-theme', this.toggle);
    }else{
      this.toggle = selectedTheme=== 'light-theme' ? 'dark-theme': 'light-theme';
      this.toggleTheme();
    }
  }

}
