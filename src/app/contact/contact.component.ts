import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  messageForm : FormGroup;
  submitted : boolean = false;
  success : boolean = false;
  result : string;

  constructor(private formBuilder : FormBuilder, private data : DataService) { 

    this.messageForm = this.formBuilder.group({
      name : ['',Validators.required],
      phone : ['',Validators.required],
      message : ['',Validators.required]
    })
  }

  onSubmit(){
    this.submitted = true;

    if(this.messageForm.invalid){
      return;
    }

    this.success = true;
    this.data.SendSMSMessage(this.messageForm.controls.name.value,
      this.messageForm.controls.phone.value,
      this.messageForm.controls.message.value).subscribe(data=>{
      
      var str = data; 
      var splitted1 = str.split("<text>",2); 
      var splitted2 = splitted1[1].split("</text>",2); 
      this.result = splitted2[0];
    });
  }

  ngOnInit() {
  }

}
