import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AuthGuardService } from './utils/guards/auth-guard.service';

/**
 * http://localhost:4500/
 * http://localhost:4500/home
 * http://localhost:4500/about
 * http://localhost:4500/facebook
 */
const routes: Routes = [
  {
    path: '',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'about',
    loadChildren: './about/about.module#AboutModule',
    canActivate: [AuthGuardService,]
  },
  {
    path: 'facebook',
    loadChildren: './facebook/facebook.module#FacebookModule',
    canActivate: [AuthGuardService,]
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [
  NotFoundPageComponent,
];