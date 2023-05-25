import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './shared/layout/layout.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { MenuComponent } from './shared/layout/menu/menu.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { ComponentsComponent } from './features/components/components.component';
import { RecommendationsComponent } from './features/recommendations/recommendations.component';
import { SocialNetworkingComponent } from './features/social-networking/social-networking.component';
import { CategorizationPersonalizationComponent } from './features/categorization-personalization/categorization-personalization.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    ComponentsComponent,
    RecommendationsComponent,
    SocialNetworkingComponent,
    CategorizationPersonalizationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
