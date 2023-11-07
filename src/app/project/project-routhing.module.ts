import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ServiceComponent } from './component/service/service.component';
import { ContactComponent } from './component/contact/contact.component';
import { TokenGGuard } from '../token-g.guard';

const routes: Routes = [
{path:"project",component:ProjectComponent,children:[
  {path:"",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"service",component:ServiceComponent},
  {path:"contact",component:ContactComponent},
],canActivate:[TokenGGuard]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProjectRouthingModule { }
