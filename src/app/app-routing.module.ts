import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarGuardService } from './services/sidebar-guard.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
      {
        path: 'landing-page',
        loadChildren: () =>
          import('./pages/landing-page/landing-page.module').then(
            (m) => m.LandingPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
