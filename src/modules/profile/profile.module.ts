import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from 'src/components/profile/profile.component';
import { RouterModule, Route } from '@angular/router';
import { ProfileGuard } from 'src/services/profile.guard';


const routes: Route[] = [
  {
    path: '',
    component: ProfileComponent
  }
];

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [ProfileGuard]
})
export class ProfileModule { }
