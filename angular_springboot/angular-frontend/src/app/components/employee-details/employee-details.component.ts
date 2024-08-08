import { Component, OnInit } from '@angular/core';
// import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/components/model/employee';
import { EmployeeService } from 'src/app/employee.service';
// import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number
  employee: Employee
  constructor(private route: ActivatedRoute, private employeService: EmployeeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employee = new Employee();
    this.employeService.getEmployeeById(this.id).subscribe( data => {
      this.employee = data;
    });
  }

}
