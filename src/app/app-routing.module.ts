import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Modules/login/login.component';
import { HomeComponent } from './Modules/home/home.component';
import { HomeLoanComponent } from './Modules/home-loan/home-loan.component';
import { VehicleLoanComponent } from './Modules/vehicle-loan/vehicle-loan.component';
import { PersonalLoanComponent } from './Modules/personal-loan/personal-loan.component';
import { EducationLoanComponent } from './Modules/education-loan/education-loan.component';
import { DigitalLoanComponent } from './Modules/digital-loan/digital-loan.component';
import { UserManageComponent } from './Modules/user-manage/user-manage.component';



const router: Routes = [
  { component: LoginComponent, path: 'login' },
  {
    component: HomeComponent, path: 'home', children: [
      { component: HomeLoanComponent, path: 'homeLoan' },
      { component: VehicleLoanComponent, path: 'vehicleLoan' },
      { component: PersonalLoanComponent, path: 'personalLoan' },
      { component: EducationLoanComponent, path: 'educationLoan' },
      { component: DigitalLoanComponent, path: 'digitalizationLoan' },
      { component: UserManageComponent, path: 'userManage' },
      // { path: '', redirectTo: 'userManage', pathMatch: 'full' },
      { path: '', redirectTo: 'userManage', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
