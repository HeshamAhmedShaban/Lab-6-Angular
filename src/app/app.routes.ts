import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductParentComponent } from './Components/product-parent/product-parent.component';
import { MoviesComponent } from './Components/movies/movies.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { CardComponent } from './Components/card/card.component';
import { JoinUsComponent } from './Components/join-us/join-us.component';
import { SignUpComponent } from './Components/join-us/sign-up/sign-up.component';
import { MovieDetailsComponent } from './Components/movie-details/movie-details.component';
import { LoginComponent } from './Components/join-us/login/login.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { userGuard } from './Guards/user.guard';

export const routes: Routes = [
{path:'',component:SignUpComponent,title:"Sign Up"},
{path:'home',component:HomeComponent,title:"Home"},
{path:'about',component:AboutComponent,title:"About"},
{path:'contact',component:ContactComponent,title:"Contact"},
{path:'product',component:ProductParentComponent,title:"Product",canActivate:[userGuard]},
{path:'movies',component:MoviesComponent,title:"Movies",canActivate:[userGuard]},
{path:'card',component:CardComponent,title:"Card"},
{path:'addproduct',component:AddProductComponent,canActivate:[userGuard]},
{path:'product/:id',component:ProductDetailsComponent,title:"Product Details"},
{path:'movies/:id',component:MovieDetailsComponent,title:"Movie Details"},
{path:'join',component:JoinUsComponent,title:"Join Us"},
{path:'login',component:LoginComponent,title:"Login"},
{path:'signup',component:SignUpComponent,title:"Sign Up"},
{path:'**',component:NotFoundComponent,title:"Not Found"}
];
