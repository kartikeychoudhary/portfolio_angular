import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  toggleTheme$ = new Subject();
  toggleTheme = this.toggleTheme$.asObservable();

  toggleMenu$ = new Subject();
  toggleMenu = this.toggleMenu$.asObservable();

  scrollTo$ = new Subject();
  scrollTo = this.scrollTo$.asObservable();

  notification$ = new Subject();
  notification = this.notification$.asObservable();

  constructor() { }

  consumeOnToggleTheme(){
    return this.toggleTheme;
  }

  onToggleTheme(theme:string){
    return this.toggleTheme$.next(theme);
  }

  consumeOnToggleMenu(){
    return this.toggleMenu;
  }

  onToggleMenu(bool:boolean){
    return this.toggleMenu$.next(bool);
  }

  consumeScrollTo(){
    return this.scrollTo;
  }

  scrollToSection(section:string){
    return this.scrollTo$.next(section);
  }

  consumeShowNotification(){
    return this.notification;
  }

  showNotification(message:string){
    return this.notification$.next(message);
  }

}
