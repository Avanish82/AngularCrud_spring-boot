import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { Login } from '../model/login';

@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  
   

  login: Login= new Login();
  constructor(private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
  }

  loginUsers(){
    debugger
    this.loginService.usersLogin(this.login).subscribe( (data: any) =>{
      console.log(data);
      this.gotoHomePage();
    },
    error => console.log(error));
  }
  gotoHomePage() {
    // this.isLoggedIn=false
    // throw new Error('Method not implemented.');
    this.router.navigate(['/home']);
  }
 // goToEmployeeList(){
  //   this.router.navigate(['/home']);
  // }
  
  onSubmit(){
    console.log(this.login);
    this.loginUsers();
  }
}
