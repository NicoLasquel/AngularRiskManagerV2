import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { Ebiosrm11Component } from './ebiosrm1/ebiosrm11.component';
import { Ebiosrm12Component } from './ebiosrm1/ebiosrm12.component';
import { Ebiosrm13Component } from './ebiosrm1/ebiosrm13.component';
import { Ebiosrm14Component } from './ebiosrm1/ebiosrm14.component';
import { Ebiosrm21Component } from './ebiosrm2/ebiosrm21.component';
import { Ebiosrm22Component } from './ebiosrm2/ebiosrm22.component';
import { Ebiosrm23Component } from './ebiosrm2/ebiosrm23.component';
import { Ebiosrm31Component } from './ebiosrm3/ebiosrm31.component';
import { Ebiosrm32Component } from './ebiosrm3/ebiosrm32.component';
import { Ebiosrm33Component } from './ebiosrm3/ebiosrm33.component';
import { Ebiosrm41Component } from './ebiosrm4/ebiosrm41.component';
import { Ebiosrm42Component } from './ebiosrm4/ebiosrm42.component';
import { Ebiosrm51Component } from './ebiosrm5/ebiosrm51.component';
import { Ebiosrm52Component } from './ebiosrm5/ebiosrm52.component';
import { Ebiosrm53Component } from './ebiosrm5/ebiosrm53.component';


const routes: Routes = [
  { path: "", redirectTo:"/dashboard", pathMatch:"full"},
  { path: "dashboard", component: DashboardUserComponent },
  { path: "new-project", component: CreateProjectComponent },
  { path: "EbiosRM-11/:id", component: Ebiosrm11Component },
  { path: "EbiosRM-12/:id", component: Ebiosrm12Component },
  { path: "EbiosRM-13/:id", component: Ebiosrm13Component },
  { path: "EbiosRM-14/:id", component: Ebiosrm14Component },
  { path: "EbiosRM-21/:id", component: Ebiosrm21Component },
  { path: "EbiosRM-22/:id", component: Ebiosrm22Component },
  { path: "EbiosRM-23/:id", component: Ebiosrm23Component },
  { path: "EbiosRM-31/:id", component: Ebiosrm31Component },
  { path: "EbiosRM-32/:id", component: Ebiosrm32Component },
  { path: "EbiosRM-33/:id", component: Ebiosrm33Component },
  { path: "EbiosRM-41/:id", component: Ebiosrm41Component },
  { path: "EbiosRM-42/:id", component: Ebiosrm42Component },
  { path: "EbiosRM-51/:id", component: Ebiosrm51Component },
  { path: "EbiosRM-52/:id", component: Ebiosrm52Component },
  { path: "EbiosRM-53/:id", component: Ebiosrm53Component },

  { path: "**", component: DashboardUserComponent },//dernier path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
