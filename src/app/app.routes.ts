import { RouterModule, Routes } from '@angular/router';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { ManualFormComponent } from './components/manual-form/manual-form.component';
import { AssessmentFormComponent } from './components/assessment-form/assessment-form.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { SignFormComponent } from './components/sign-form/sign-form.component';
import { UpdatationFormComponent } from './components/updatation-form/updatation-form.component';
import { ForgotFormComponent } from './components/forgot-form/forgot-form.component';
import { MainPageFormComponent } from './components/main-page-form/main-page-form.component';
import { ResumeDataFormComponent } from './components/resume-data-form/resume-data-form.component';
import { ErrorFormComponent } from './components/error-form/error-form.component';

export const routes: Routes = [
	{path:'',component:ProfileFormComponent},
	{path:'profile',component:ProfileFormComponent },
	{path:'manual',component:ManualFormComponent},
	{path:'assessment',component:AssessmentFormComponent},
	{path:'contact',component:ContactFormComponent},
	{path:'update',component:UpdatationFormComponent},
	{path:'login',component:SignFormComponent},
	{path:'forgot',component:ForgotFormComponent},
	{path:'main-page',component:MainPageFormComponent},
	{path:'resume',component:ResumeDataFormComponent},
	{path:'error',component:ErrorFormComponent}
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class  AppRoutingModule {}
