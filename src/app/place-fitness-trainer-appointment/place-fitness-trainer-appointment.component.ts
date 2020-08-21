import { Component, OnInit, Directive, ElementRef, Input } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { UserService } from "../_services/";

@Directive({
  selector: "[appautoFocus]"
})

export class Fitness {
  constructor(
    public firstname: string,
    public lastname: string,
    public age: number,
    public phonenumber: number,
    public email: string,
    public streetaddress: string,
    public city: string,
    public state: string,
    public country: string,
    public pincode: number,
    public trainerpreference: string,
    public physiotherapist: string,
    public packages: string,
    public inr: number,
    public paisa: number,


  ) {}
}

@Component({
  selector: "app-place-fitness-trainer-appointment",
  templateUrl: "./place-fitness-trainer-appointment.component.html",
})
export class PlaceFitnessTrainerAppointmentComponent implements OnInit {
  
  noNummbersValidation: string = "[a-zA-Z]*";
  emailValidation: RegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  numberValidation: string = "[0-9]*";
  fitnessForm: FormGroup;
  @Input() public appAutoFocus: boolean;
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private firstnameElement: ElementRef
  ) {}

  ngOnInit() {
    
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
      packages:[null,[Validators.required]],
      paisa:[null,[Validators.required]],


    });
    this.firstnameElement.nativeElement.focus();

  }
public ngAfterContentInit() {

}

  

  onSubmit() {
    //use try catch

    if(this.fitnessForm.valid){
      
  
     this.userService
      .postfitnessdata(
        new Fitness(
          this.fitnessForm.value.firstname,
          this.fitnessForm.value.lastname.value,
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
          alert("Appointment Placed");
        },
        (err) => {
          alert("Error in placing the appointment");
        }
      );

    
  }
  else{
    alert("Form Incomplete !");
  }
}}
