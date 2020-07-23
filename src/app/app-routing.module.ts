import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticesComponent } from './components/notices/notices.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/welcome'
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'notices',
    component: NoticesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
