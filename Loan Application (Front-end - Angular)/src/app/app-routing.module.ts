import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { UserHomeComponent } from './pages/user/user-home/user-home.component';
import { DisplayLoanComponent } from './pages/user/display-loan/display-loan.component';
import { CreateLoanComponent } from './pages/user/create-loan/create-loan.component';
import { PaymentScheduleComponent } from './pages/user/payment-schedule/payment-schedule.component';
import { AdminGuard } from './services/admin-guard/admin.guard';
import { UserGuard } from './services/user-guard/user.guard';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full'
  },
  {
    path: 'signin',
    component: SigninComponent,
    pathMatch: 'full'
  },
  
  { 
    path: 'payment-schedule', 
    component: PaymentScheduleComponent,
    canActivate : [UserGuard]
  },

  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    canActivate: [AdminGuard],
    //for to load the profile component in admin dashboard.. 
    children:[
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
    ],
  },

  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    canActivate: [UserGuard],
    //for to create loan, display-loan, payment component in user dashboard.. 
    children:[
      {
        path: '',
        component: UserHomeComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'create-loan',
        component: CreateLoanComponent,
      },
      {
        path: 'display-loan',
        component: DisplayLoanComponent,
      },
      {
        path: 'payment-schedule',
        component: PaymentScheduleComponent,
      },
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
