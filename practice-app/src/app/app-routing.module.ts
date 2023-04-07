import { RoleGuard } from './theme/shared/role.guard';
import { TimesheetComponent } from './demo/pages/timesheet/timesheet.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaveRequestComponent } from './demo/pages/leave-request/leave-request.component';
import { AdminComponent } from './theme/layout/admin/admin.component';
import {AuthComponent} from './theme/layout/auth/auth.component';
import { ProfileComponent } from './demo/pages/profile/profile.component';
import { AuthService } from './theme/shared/auth.service';
import { AuthGuard } from './theme/shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard/analytics',
        pathMatch: 'full'
      },{
        path: 'leave-request', component: LeaveRequestComponent
      },
      {
        path: 'timesheet', component: TimesheetComponent
      },
      {
        path: 'profile', component: ProfileComponent,canActivate : [RoleGuard]
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./demo/dashboard/dashboard.module').then(module => module.DashboardModule)
        ,canActivate:[AuthGuard]
      },
      {
        path: 'layout',
        loadChildren: () => import('./demo/pages/layout/layout.module').then(module => module.LayoutModule)
      },
      {
        path: 'sample-page',
        loadChildren: () => import('./demo/pages/sample-page/sample-page.module').then(module => module.SamplePageModule)
      }
    ]
  },
  {
    path: 'employee',
    component: AuthComponent,
    children: [
      
      {
        path: 'auth',
        loadChildren: () => import('./demo/pages/authentication/authentication.module').then(module => module.AuthenticationModule)
      },
      {
        path: 'maintenance',
        loadChildren: () => import('./demo/pages/maintenance/maintenance.module').then(module => module.MaintenanceModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
