import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthChangePasswordRoutingModule } from './auth-change-password-routing.module';
import { AuthChangePasswordComponent } from './auth-change-password.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthChangePasswordRoutingModule
  ],
  declarations: [AuthChangePasswordComponent]
})
export class AuthChangePasswordModule { }
