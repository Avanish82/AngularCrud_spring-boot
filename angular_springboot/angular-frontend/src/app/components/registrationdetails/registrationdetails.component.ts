// import { Component, OnInit } from '@angular/core';
// import { Registration } from '../model/registration';
// import { RegistrationService } from '../service/registration.service';
// import { ActivatedRoute } from '@angular/router';

import { Component, OnInit } from "@angular/core";
import { Registration } from "../model/registration";
import { RegistrationService } from "../service/registration.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-registrationdetails',
  templateUrl: './registrationdetails.component.html',
  styleUrls: ['./registrationdetails.component.css']
})
export class RegistrationdetailsComponent  implements OnInit {

  id: number
  registration: Registration
  constructor(private route: ActivatedRoute, private registrationService: RegistrationService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.registration = new Registration();
    this.registrationService.getRegistrationById(this.id).subscribe( data => {
      this.registration = data;
    });
  }

}
