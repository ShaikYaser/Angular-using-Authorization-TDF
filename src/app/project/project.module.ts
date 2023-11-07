import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { ProjectRouthingModule } from './project-routhing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ServiceComponent } from './component/service/service.component';
import { ContactComponent } from './component/contact/contact.component';

@NgModule({
  declarations: [
    ProjectComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProjectRouthingModule
  ]
})
export class ProjectModule { }
