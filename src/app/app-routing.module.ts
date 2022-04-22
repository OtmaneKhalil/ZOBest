import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProduitComponent } from './pages/produit/produit.component';
import { SignupComponent } from './pages/signup/signup.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'produit', component: ProduitComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'wishlist', component: WishlistComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
