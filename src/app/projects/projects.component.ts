import { Component, OnInit } from '@angular/core';
import { ContactService, IMessage } from '../contact.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  message: IMessage = {};

  msgSent: boolean = false;
  msgNotSent: boolean = false;

  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit() {
  }

  onSubmit(message: IMessage){
    this.contactService.sendEmail(message).subscribe(res =>{
      this.msgSent = true;
      setTimeout(()=>{
        this.msgSent = false;
      }, 5000);
      console.log("Success: ", res);
    }, err =>{
      this.msgNotSent = true;
      setTimeout(()=>{
        this.msgNotSent = false;
      }, 8000);
      console.log("Error: ", err);
    })
  }

}
