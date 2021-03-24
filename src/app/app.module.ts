import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { MenuComponent } from './includes/menu/menu.component';
import { HomebannerComponent } from './includes/homebanner/homebanner.component';
import { SocialComponent } from './includes/social/social.component';
import { JobCountComponent } from './includes/job-count/job-count.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './signup/signup.component';
import { EmployerRegisterComponent } from './employer-register/employer-register.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LatestJobsComponent } from './includes/latest-jobs/latest-jobs.component';
import { PostJobComponent } from './post-job/post-job.component';
import { RightSidebarComponent } from './includes/right-sidebar/right-sidebar.component';
import { CareerAdviceComponent } from './career-advice/career-advice.component';
import { CareerViewComponent } from './career-view/career-view.component';
import { JobFromViewComponent } from './job-from-view/job-from-view.component';
import { JobSearchComponent } from './includes/job-search/job-search.component';
import { EmployersViewComponent } from './employers-view/employers-view.component';
import { JobpostComponent } from './jobpost/jobpost.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { ContactComponent } from './contact/contact.component';
import { ApplythisJobComponent } from './applythis-job/applythis-job.component';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { AuthInterceptor } from './shared/auth.interceptor';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { UsersigninComponent } from './usersignin/usersignin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomebannerComponent,
    SocialComponent,
    JobCountComponent,
    PageNotFoundComponent,
    SignupComponent,
    EmployerRegisterComponent,
    ForgotComponent,
    LatestJobsComponent,
    PostJobComponent,
    RightSidebarComponent,
    CareerAdviceComponent,
    CareerViewComponent,
    JobFromViewComponent,
    JobSearchComponent,
    EmployersViewComponent,
    JobpostComponent,
    ServicePageComponent,
    ContactComponent,
    ApplythisJobComponent,
    UsersignupComponent,
    UsersigninComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
