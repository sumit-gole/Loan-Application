import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';

// Angular Material..
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from  '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DisplayLoanComponent } from './pages/user/display-loan/display-loan.component';
import { CreateLoanComponent } from './pages/user/create-loan/create-loan.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { UserHomeComponent } from './pages/user/user-home/user-home.component';
import { UserSidebarComponent } from './pages/user/user-sidebar/user-sidebar.component';
import { ApplyLoanPopupComponent } from './pages/user/popup/apply-loan-popup/apply-loan-popup.component';
import { PayLoanPopupComponent } from './pages/user/popup/pay-loan-popup/pay-loan-popup.component';
import { PaymentScheduleComponent } from './pages/user/payment-schedule/payment-schedule.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    CreateLoanComponent,
    DisplayLoanComponent,
    UserHomeComponent,
    UserSidebarComponent,
    ApplyLoanPopupComponent,
    PayLoanPopupComponent,
    PaymentScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatListModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatDialogModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
