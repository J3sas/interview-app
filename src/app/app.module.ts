import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NavbarPageComponent } from './components/navbar-page/navbar-page.component';
import { IndexPageComponent } from './components/index-page/index-page.component';
import { TablePageComponent } from './components/index-page/table-page/table-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { ValidationsDirective } from './directives/validations.directive';
import { ChangeTextDirective } from './directives/change-text.directive';
import { CustomTextPageComponent } from './components/custom-text-page/custom-text-page.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarPageComponent,
    IndexPageComponent,
    TablePageComponent,
    ValidationsDirective,
    ChangeTextDirective,
    CustomTextPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule, MatInputModule, MatButtonModule,MatSelectModule,MatFormFieldModule,
    HttpClientModule,
    MatSortModule,
    FormsModule ,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
