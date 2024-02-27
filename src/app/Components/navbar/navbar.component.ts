import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

userLoged!:boolean

constructor(private router:Router, private authService:AuthService){
  this.userLoged=false
}
ngOnInit(): void {
  this.authService.getUserState().subscribe({
    next:(state)=>{
      console.log(state);
      this.userLoged=state
    }
      })
}

changeRoute(){
  if(this.userLoged){
    this.authService.logout()
  }
  if(!this.userLoged){
    this.router.navigate(['/login'])
  }
}

}
