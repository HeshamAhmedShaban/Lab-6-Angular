import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../../Models/user';
import { UserService } from '../../../Services/user.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,CommonModule,NgClass],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit {

  registerForm:FormGroup

  constructor(private router:Router, private formbuilder:FormBuilder,private userService:UserService) {
    // this.registerForm = new FormGroup({
    //     fullName: new FormControl('',[Validators.required,Validators.minLength(5)]),
    //     email: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    //     mobile: new FormControl('',[Validators.required,Validators.pattern("^01[0125][0-9]{8}$")]),
    //     address: new FormControl('',[Validators.required]),
    //     password: new FormControl('',[Validators.required,Validators.minLength(5)])
    // });
      this.registerForm = this.formbuilder.group({
          fullName:new FormControl('',[Validators.required,Validators.minLength(5)]),
          email:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
          mobileNumber:this.formbuilder.array([new FormGroup({
            mobileNumber:new FormControl('',[Validators.required,Validators.pattern("^01[0125][0-9]{8}$")])
          })]),
          address:this.formbuilder.array([
            new FormGroup({
              city:new FormControl('',[Validators.required]),
              postCode:new FormControl('',[Validators.required]),
              street:new FormControl('',[Validators.required])
            })
          ]),
          password:new FormControl('',[Validators.required,Validators.minLength(5)])
      })
  }

get fullName(){
  return this.registerForm.get('fullName');
}

get email(){
  return this.registerForm.get('email');
}

get password(){
  return this.registerForm.get('password');
}

get mobileNumber(){
  return this.registerForm.get('mobileNumber') as FormArray;
}

newMobile():FormGroup{
return this.formbuilder.group({
  mobileNumber:''
})
}

addMobile(){
  this.mobileNumber.push(this.newMobile());
}

removeMobile(idnex:number){
  this.mobileNumber.removeAt(idnex);
}

get address(){
  return this.registerForm.get('address') as FormArray;
}

newAddress():FormGroup{
  return this.formbuilder.group({
    city:'',
    postCode:'',
    street:''
  })
}

addAddress(){
this.address.push(this.newAddress());
}

removeAddress(index:number){
  this.address.removeAt(index);
}

user:User ={} as User;

register(){
this.user.fullName = this.fullName?.value;
this.user.email = this.email?.value;
this.user.password = this.password?.value;
this.user.mobileNumber = this.mobileNumber?.value.map(
  (mobile:any) => mobile.mobileNumber
)
this.user.address = this.address?.value.map(
  (address:any) =>`${address.city} ${address.street} ${address.postCode}`
)

this.userService.register(this.user).subscribe({
  next:()=>{
    this.router.navigate(['/login']);
  }
});

}

ngOnInit(): void {


}

  // login(){
  //   this.router.navigate(['/login']);
  // }
}
