import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Modules/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './Modules/home/home.component';
import { AppMaterialsModule } from './app-materials.module';
import { NavigationHomeComponent } from './navigation-home/navigation-home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeLoanComponent } from './Modules/home-loan/home-loan.component';
import { VehicleLoanComponent } from './Modules/vehicle-loan/vehicle-loan.component';
import { PersonalLoanComponent } from './Modules/personal-loan/personal-loan.component';
import { EducationLoanComponent } from './Modules/education-loan/education-loan.component';
import { DigitalLoanComponent } from './Modules/digital-loan/digital-loan.component';
import { UserManageComponent } from './Modules/user-manage/user-manage.component';
import { ControllerServletComponent } from './Modules/controller-servlet/controller-servlet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavigationHomeComponent,
    HomeLoanComponent,
    VehicleLoanComponent,
    PersonalLoanComponent,
    EducationLoanComponent,
    DigitalLoanComponent,
    UserManageComponent,
    ControllerServletComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterialsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
