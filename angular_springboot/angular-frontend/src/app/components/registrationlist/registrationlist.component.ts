import { Component, OnInit } from '@angular/core';
import { Registration } from '../model/registration';
import { RegistrationService } from '../service/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrationlist',
  templateUrl: './registrationlist.component.html',
  styleUrl: './registrationlist.component.css'
})
export class RegistrationlistComponent implements OnInit {
  
  registrations: Registration[];
 // For search
 searchtext:any;
  
//  registrations: Registration[];
  constructor(private registrationService: RegistrationService,
    private router: Router) { }

  ngOnInit(): void {
    this.getRegistrations();
  }

  private getRegistrations(){
    this.registrationService.getAllRegistrationList().subscribe(data => {
      debugger
      this.registrations = data;
      console.log(data)
    });
  }

  registrationDetails(id: number){
    this.router.navigate(['registrationdetails', id]);
  }

  updateRegistration(id: number){
    this.router.navigate(['registrationupdate', id]);
  }

  deleteRegistration(id: number){
    this.registrationService.deleteRegistration(id).subscribe( data => {
      console.log(data);
      this.getRegistrations();
    })
  }
}

   
