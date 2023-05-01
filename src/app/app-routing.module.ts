import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: ()=> import('./features/login/login.module').then((m)=>m.LoginModule)
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'components',
        loadChildren: ()=> import('./features/components/components.module').then((m)=>m.ComponentsModule)
      }
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
