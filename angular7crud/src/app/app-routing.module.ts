import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GstAddComponent } from './components/gst-add/gst-add.component';
import { GstGetComponent } from './components/gst-get/gst-get.component';
import { GstEditComponent } from './components/gst-edit/gst-edit.component';


const routes: Routes = [
  {
    path: 'business/create',
    component: GstAddComponent
  },
  {
    path: 'business',
    component: GstGetComponent
  },
  {
    path: 'business/edit:id',
    component: GstEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
