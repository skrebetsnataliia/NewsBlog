import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/components/login/login.component';
import { HomeComponent } from 'src/components/home/home.component';
import { ProfileGuard } from 'src/services/profile.guard';


const routes: Routes = [
  {
  path: 'login',
  component: LoginComponent
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('src/modules/main/main.module').then(
            (m) => m.MainModule
          ),
        canActivate : [ProfileGuard]
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('src/modules/profile/profile.module').then(
            (m) => m.ProfileModule
          ),
        canActivate : [ProfileGuard]
      },
      {
        path: 'news',
        loadChildren: () =>
          import('src/modules/news/news.module').then(
            (m) => m.NewsModule
          ),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
