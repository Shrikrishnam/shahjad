import { Component, OnInit } from '@angular/core';
import { UserService } from "../_services/";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import {Fitness} from "../place-fitness-trainer-appointment/place-fitness-trainer-appointment.component"
import { ConstantPool } from '@angular/compiler';
@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html'
})

//rewrite the code to make it prettier and recheck
export class ViewAppointmentComponent implements OnInit {
  errorMsg: String = null;
  tableData: Array<Object>;
  showEditForm: Boolean = false;
  constructor(private userService: UserService, private formBuilder: FormBuilder) { }

  noNummbersValidation: string = "[a-zA-Z]*";
  emailValidation: RegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  numberValidation: string = "[0-9]*";
  fitnessForm: FormGroup;
  idUpdate: number;
  ngOnInit() {
    
    this.getfitness();
      this.fitnessForm = this.formBuilder.group({
      firstname: [
        null,
        [
        Validators.required,
        Validators.pattern(this.noNummbersValidation),
        ]
      ],
      lastname: [
        null,
        [
        Validators.required,
        Validators.pattern(this.noNummbersValidation),
        ]
      ],
      email:[
        null,
        [
          Validators.required,
          Validators.email,
          Validators.pattern(this.emailValidation)
        ]
      ],
      age: [
        null, [       
          Validators.required, Validators.min(19),Validators.max(59)
        ],
      ],
      phonenumber:[
        null,
        [
          Validators.required,
          Validators.pattern(this.numberValidation),
          Validators.minLength(8),
          Validators.maxLength(10)
        ]
      ],
      streetaddress:[null,[Validators.required]],
      pincode:[
        null,
        [
          Validators.required,
          Validators.maxLength(6),
          Validators.minLength(6),
          Validators.pattern(this.numberValidation),
        ]
      ],
      city:[null,[Validators.required]],
      state:[null,[Validators.required]],
      country:[null,[Validators.required,Validators.pattern(this.noNummbersValidation)]],
      inr:[null,[Validators.required]],
      trainerpreference:[null,[Validators.required]],
      physiotherapist:[null,[Validators.required]],
      packages:[null,[Validators.required]],
      paisa:[null,[Validators.required]],


    });
  }

  
 editAppointment(id):void{

  this.showEditForm = true;
  
  this.userService.getfitnessdata(id).subscribe(
  (res) =>  {
    this.setFormFields(res);this.idUpdate = res.id},
  (err) => alert("Appointment not found !")
  );

  
  
 }
 setFormFields(result):void{
  this.fitnessForm.setValue({
    firstname: result.firstname,
    lastname: result.lastname,
    age: result.age,
    phonenumber: result.phonenumber,
    email: result.email,
    streetaddress: result.streetaddress,
    city: result.city,
    state: result.state,
    country: result.country,
    pincode: result.pincode,
    trainerpreference: result.trainerpreference,
    physiotherapist: result.physiotherapist,
    packages: result.packages,
    inr: result.inr,
    paisa: result.paisa,
    
  });
  console.log(this.fitnessForm)
 }

 saveAppointment():void{
  if(this.fitnessForm.valid){
      
  
    this.userService
     .updatefitnessdata(this.idUpdate,
       new Fitness(
         this.fitnessForm.value.firstname,
         this.fitnessForm.value.lastname,
         this.fitnessForm.value.age,
         this.fitnessForm.value.phonenumber,
         this.fitnessForm.value.email,
         this.fitnessForm.value.streetaddress,
         this.fitnessForm.value.city,
         this.fitnessForm.value.state,
         this.fitnessForm.value.country,
         this.fitnessForm.value.pincode,
         this.fitnessForm.value.trainerpreference,
         "yes",
         this.fitnessForm.value.packages,
         this.fitnessForm.value.inr,
         this.fitnessForm.value.paisa,
       )
     )
     .subscribe(
       (res) => {
         alert("Appointment Updated");
         this.showEditForm = false;
         console.log(res);
       },
       (err) => {
         alert("Error in updating the appointment");
       }
     );

   
 }
 else{
   alert("Form Incomplete !");
 }
}
  
  tableUpdate(data):void{
    this.tableData = data;
    
  }
  getfitness():void{
   this.userService.getfitnessdata().subscribe(
      (i) =>  this.tableUpdate(i),
      (err) => alert("error")

    )
  }
  
  deletefitness(id):void{
    const confirmDelete = confirm("Confirm to delete ?");
    if(confirmDelete)
    {
    this.userService.deletedata(id).subscribe(
      (i)=> {alert("appointment deleted !"); location.reload()},
      (err)=> alert("Error occured while deleting the appointment")
    )
    }
  }
}
