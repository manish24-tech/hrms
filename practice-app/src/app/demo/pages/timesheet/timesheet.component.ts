import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss'],
  // providers: [NgbPaginationConfig],
})

export class TimesheetComponent implements OnInit {
  myForm: any;

  options:any;
  people = [
    { firstName: '04/04/2023', lastName: '4', companyProject :'Enprowess', email: 'The Crud for the employee.The bug fixing.' },
    { firstName: '04/04/2023', lastName: '4', companyProject :'Enprowess', email: 'Created a form and created an api and tested it.Create table' },
    { firstName: '03/04/2023', lastName: '5',companyProject :'Enprowess', email: 'Created the api.Tested and bug is fixed.' },{ firstName: '04/04/2023', lastName: '4', companyProject :'Enprowess', email: 'The Crud for the employee.The bug fixing.' },
    { firstName: '04/04/2023', lastName: '4', companyProject :'Enprowess', email: 'Created a form and created an api and tested it.Create table' },
    { firstName: '03/04/2023', lastName: '5',companyProject :'Enprowess', email: 'Created the api.Tested and bug is fixed.' },
    { firstName: '04/04/2023', lastName: '4', companyProject :'Enprowess', email: 'The Crud for the employee.The bug fixing.' },
    { firstName: '04/04/2023', lastName: '4', companyProject :'Enprowess', email: 'Created a form and created an api and tested it.Create table' },
    { firstName: '03/04/2023', lastName: '5',companyProject :'Enprowess', email: 'Created the api.Tested and bug is fixed.' },
    { firstName: '04/04/2023', lastName: '4', companyProject :'Enprowess', email: 'The Crud for the employee.The bug fixing.' },
    { firstName: '04/04/2023', lastName: '4', companyProject :'Enprowess', email: 'Created a form and created an api and tested it.Create table' },
    { firstName: '03/04/2023', lastName: '5',companyProject :'Enprowess', email: 'Created the api.Tested and bug is fixed.' },
    { firstName: '04/04/2023', lastName: '4', companyProject :'Enprowess', email: 'The Crud for the employee.The bug fixing.' },
    { firstName: '04/04/2023', lastName: '4', companyProject :'Enprowess', email: 'Created a form and created an api and tested it.Create table' },
    { firstName: '03/04/2023', lastName: '5',companyProject :'Enprowess', email: 'Created the api.Tested and bug is fixed.' },
    { firstName: '04/04/2023', lastName: '4', companyProject :'Enprowess', email: 'The Crud for the employee.The bug fixing.' },
    { firstName: '04/04/2023', lastName: '4', companyProject :'Enprowess', email: 'Created a form and created an api and tested it.Create table' },
    { firstName: '03/04/2023', lastName: '5',companyProject :'Enprowess', email: 'Created the api.Tested and bug is fixed.' },

  ];
  constructor(private formBuilder: FormBuilder,private modalService: NgbModal) { }

  page = 1;
  pageSize = 5;
  collectionSize = 0;
  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      fromDate: new FormControl(),
      hour: new FormControl(),
     reason: new FormControl(),
     isChecked: new FormControl()
     });
     this.options =[ 
       { value: 'option1', label: 'Enprowess' },
        { value: 'option2', label: 'Symform' },

        { value: 'option3', label: 'Ecosmob' }
    ];


    
  }
  open(content) {
    // alert('hey');
    this.modalService.open(content, { centered: true });
  }

  // update the pagination based on the filtered data
  updatePagination() {
    this.collectionSize = this.people.length;
  }
  onSubmit() {
    console.log(this.myForm.value);
  }

}
