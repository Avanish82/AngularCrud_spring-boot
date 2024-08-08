import { Component, OnInit } from '@angular/core';
import { Registration } from '../model/registration';
import { RegistrationService } from '../service/registration.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registrationupdate',
  // standalone: true,
  // imports: [],
  templateUrl: './registrationupdate.component.html',
  styleUrl: './registrationupdate.component.css'
})
export class RegistrationupdateComponent implements OnInit {

  id: number;
  registration: Registration = new Registration();
  constructor(private registrationService: RegistrationService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.registrationService.getRegistrationById(this.id).subscribe(data => {
      this.registration = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.registrationService.updateRegistration(this.id, this.registration).subscribe( data =>{
      this.goToRegistrationList();
    }
    , error => console.log(error));
  }

  goToRegistrationList(){
    this.router.navigate(['/registrationlist']);
  }
}

