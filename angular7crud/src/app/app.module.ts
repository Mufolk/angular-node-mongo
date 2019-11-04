import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GstAddComponent } from './components/gst-add/gst-add.component';
import { GstGetComponent } from './components/gst-get/gst-get.component';
import { GstEditComponent } from './components/gst-edit/gst-edit.component';

import { BusinessService } from './services/business.service';

@NgModule({
  declarations: [
    AppComponent,
    GstAddComponent,
    GstGetComponent,
    GstEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    BusinessService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
