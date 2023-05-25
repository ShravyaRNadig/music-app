import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';

@NgModule({
  declarations: [    
   NewsComponent, ContactComponent, LatestNewsComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
