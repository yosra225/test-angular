import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Doctor } from '../shared/doctor.model';



@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {


  constructor() { }
    

  specialityList: any = ['Ophtalmologiste', 'radiologue', 'Pédiatre']
  doctors : Doctor[] = [  
    new Doctor("DR SOPHIE PIERREPONT", "Ophtalmologiste", true),
    new Doctor("DR Alexandra Dupont", "Ophtalmologiste", false),
    new Doctor("Dr Alexandre Paul", "radiologue", true),
    new Doctor("Dr Nadir Madani", "Pédiatre", false)
  ]

  doctorsSelected : Doctor[] = [];
 
      
  
  form = new FormGroup({
    website: new FormControl('', Validators.required)
  });
  
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
  }
  onOptionsSelected(value:string){
    this.doctorsSelected = [];
    console.log("the selected value is " + value);  
    for (var doctor in this.doctors) {
      if (this.doctors[doctor].specialite == value) {
        this.doctorsSelected.push(this.doctors[doctor]);
      }
    }

}


  ngOnInit(): void {
  }
  
}
