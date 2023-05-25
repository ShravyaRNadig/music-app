import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { NewsComponent } from './news/news.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '', component: ComponentsComponent,
    children: [
      
      {
        path:'news',
        component: NewsComponent
      },
      {
        path:'latest-news',
        component: LatestNewsComponent
      },
      {
        path:'contact',
        component: ContactComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
