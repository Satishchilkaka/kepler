import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@kepler/material'
import { HomeModule } from './home/home.module';
import { CustomersModule } from './customers/customers.module';
import { ProjectsModule } from './projects/projects.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule,
    MaterialModule,
    HomeModule,
    CustomersModule,
    ProjectsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
