import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { EmployerRegisterComponent } from './employer-register/employer-register.component';
import { ForgotComponent } from './forgot/forgot.component';
import { PostJobComponent } from './post-job/post-job.component';
import { CareerAdviceComponent } from './career-advice/career-advice.component';
import { CareerViewComponent } from './career-view/career-view.component';
import { JobFromViewComponent } from './job-from-view/job-from-view.component';
import { JobpostComponent } from './jobpost/jobpost.component';
import { EmployersViewComponent } from './employers-view/employers-view.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { ContactComponent } from './contact/contact.component';
import { ApplythisJobComponent } from './applythis-job/applythis-job.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersigninComponent } from './usersignin/usersignin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';

const routes: Routes = [
	{path: '', component:HomeComponent, pathMatch:'full'},
	{path: 'home', component:HomeComponent},
	{path: 'about', component:AboutComponent},
	{path: 'login', component:SignupComponent},
	{path: 'employer-register', component:EmployerRegisterComponent},
	{path: 'jobseeker-login', component:UsersigninComponent},
	{path: 'jobseeker-register', component:UsersignupComponent},
	{path: 'forgot', component:ForgotComponent},
	{path: 'post-job', component:PostJobComponent},
	{path: 'career-advice', component:CareerAdviceComponent},
	{path: 'career-view', component:CareerViewComponent},
	{path: 'Job-from-view', component:JobFromViewComponent},
	{path: 'employers-view', component:EmployersViewComponent},
	{path: 'jobpost', component:JobpostComponent},
	{path: 'service-page', component:ServicePageComponent},
	{path: 'contact', component:ContactComponent},
	{path: 'applythis-job', component:ApplythisJobComponent},
	{path: '', redirectTo: '', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
