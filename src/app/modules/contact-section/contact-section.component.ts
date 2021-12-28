import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BackendService } from 'src/app/services/backend.service';
import { MessagingService } from 'src/app/services/messaging.service';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent implements OnInit {

  formContact;
  @Input() contact;

  constructor(private backendService:BackendService, private messageService:MessagingService) { }

  ngOnInit(): void {
    this.formContact = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]),
      message: new FormControl('', Validators.required),
      subject: new FormControl('', Validators.required),
    })
  }

  onSubmit(event){
    console.log(this.formContact);
    if(this.formContact.status === "VALID"){
      let name = this.formContact.get("name").value;
      let email = this.formContact.get("email").value;
      let message = this.formContact.get("message").value;
      let subject = this.formContact.get("subject").value;

      this.backendService.saveContact(name, email, message, subject).subscribe((res)=>{
        this.formContact.reset();
        this.messageService.showNotification("Submitted successfully. Thank You");
      });
    }else{
      this.messageService.showNotification("Please fill form properly");
    }
  }


}
