import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { FormsModule} from '@angular/forms';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';   
import { RegistrationlistComponent } from './components/registrationlist/registrationlist.component';
import { RegistrationdetailsComponent } from './components/registrationdetails/registrationdetails.component';
import { RegistrationupdateComponent } from './components/registrationupdate/registrationupdate.component';
import { FilterPipe } from './components/filterService/filter.pipe';
 
 
 

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    LoginComponent, 
    RegistrationComponent,
    RegistrationlistComponent,
    RegistrationdetailsComponent,
    RegistrationupdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 
