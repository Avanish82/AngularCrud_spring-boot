import { Component, OnInit } from '@angular/core';
import { Registration } from '../model/registration';
import { RegistrationService } from '../service/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  // standalone: true,
  // imports: [],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit{

  registration: Registration= new Registration();
  constructor(private registrationService: RegistrationService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveUserRegistration(){
    this.registrationService.userRegistration(this.registration).subscribe( (data: any) =>{
      console.log(data);
      // this.goToEmployeeList();
      this.goToRegistrationList();
    },
    error => console.log(error));
  }
  goToRegistrationList() {
    // throw new Error('Method not implemented.');
    this.router.navigate(['/home']);
  }

  // goToEmployeeList(){
  //   this.router.navigate(['/home']);
  // }
  
  onSubmit(){
    console.log(this.registration);
    this.saveUserRegistration();
  }
}
