import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../../Services/user.service';
import { AuthService } from '../../../Services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
user:any[] = [];
loginForm:FormGroup
constructor(private router:Router,private formbuilder:FormBuilder,private userService:UserService,private authservice:AuthService){
  this.loginForm = this.formbuilder.group({
    email:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)])
  })
}

get email(){
  return this.loginForm.get('email')
}

get password(){
  return this.loginForm.get('password')
}

login(){
  if(this.email && this.password){
    this.userService.getUser().subscribe({
      next:(data:any)=>{
        console.log(data);
        this.user = data;
        let validateLogin = this.user.find((user:any)=>user.email === this.email?.value && user.password === this.password?.value)
        console.log(validateLogin);
        if(validateLogin){
            if(validateLogin.email === this.email?.value && validateLogin.password === this.password?.value){
              let login={
                email:validateLogin.email,
                password:validateLogin.password
              }
              this.authservice.login(login).subscribe({
                next:()=>{
                  this.router.navigate(['/product'])
                }
              })
            }
        }else{
          alert('invalid email or password')
        }
      }
    })
  }
}
SignUp(){
this.router.navigate(['/signup'])
}
}
