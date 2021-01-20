import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
import { PartiesComponentComponent } from './parties-component/parties-component.component';

const routes: Routes = [
  {
    path: 'parties',
    component: PartiesComponentComponent
  },
  {
    path: 'doctor',
    component: DoctorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
