import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgModule } from '@angular/core';
export const routes: Routes = [
 {
    path: 'landing-page', component: LandingPageComponent
 },{
    path: 'home', component: HomePageComponent
    
    },{
    path: 'login', component: LoginComponent
    },{
    path: 'signup', component: SignUpComponent
    }
    
 

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}