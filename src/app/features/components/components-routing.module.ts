import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '', component: ComponentsComponent,
    children: [
      { 
        path: 'about', 
        component: AboutComponent 
      },
      {
        path:'news',
        component: NewsComponent
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
