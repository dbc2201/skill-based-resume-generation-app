import { RouterModule, Routes } from '@angular/router';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { ManualFormComponent } from './components/manual-form/manual-form.component';
import { AssessmentFormComponent } from './components/assessment-form/assessment-form.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { SignFormComponent } from './components/sign-form/sign-form.component';

export const routes: Routes = [
	{path:'profile',component:ProfileFormComponent },
	{path:'manual',component:ManualFormComponent},
	{path:'assessment',component:AssessmentFormComponent},
	{path:'contact',component:ContactFormComponent},
	{path:'login',component:SignFormComponent},
];
// @NgModule({
// imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })

export class  AppRoutingModule {}
