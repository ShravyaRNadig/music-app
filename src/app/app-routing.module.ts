import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { RecommendationsComponent } from './features/recommendations/recommendations.component';
import { SocialNetworkingComponent } from './features/social-networking/social-networking.component';
import { CategorizationPersonalizationComponent } from './features/categorization-personalization/categorization-personalization.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: ()=> import('./features/login/login.module').then((m)=>m.LoginModule)
  },
  {
    path: 'home',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },      
    ]
  },
  {
    path:'recommendations',
    component: LayoutComponent,
    children:[      
      {
        path: '',
        component: RecommendationsComponent,
      }
    ]
  },
  {
    path:'social-networking',
    component: LayoutComponent,
    children:[      
      {
        path: '',
        component: SocialNetworkingComponent,
      }
    ]
  },
  {
    path:'categorization-personalization',
    component: LayoutComponent,
    children:[      
      {
        path: '',
        component: CategorizationPersonalizationComponent,
      }
    ]
  },
  {
    path:'components',
    component: LayoutComponent,
    children:[      
      {
        path: '',
        loadChildren: ()=> import('./features/components/components.module').then((m)=>m.ComponentsModule)
      }
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
