import { RouterModule, Routes } from '@angular/router';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { ManualFormComponent } from './components/manual-form/manual-form.component';
import { AssessmentFormComponent } from './components/assessment-form/assessment-form.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

export const routes: Routes = [
	{path:'src\app\components',component:AppComponent},
	{path:'src\app\components\profile-form\profile-form.component.html',component:ProfileFormComponent },
	{path:'src\app\components\manual-form',component:ManualFormComponent},
	{path:'src\app\components\assessment-form',component:AssessmentFormComponent},
	{path:'src\app\components\contact-form',component:ContactFormComponent},
];
// @NgModule({
// imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })

export class  AppRoutingModule {}
