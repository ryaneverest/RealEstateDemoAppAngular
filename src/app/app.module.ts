import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ImageSlidesComponent } from './components/image-slides/image-slides.component';
import { ListItemComponent } from './components/property-listing/list-item.component';
import { AgmCoreModule } from '@agm/core';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { ComponentNotFoundComponent } from './components/error-message-component/component-not-found/component-not-found.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { CardsComponent } from './components/cards/cards.component';
import { DetailedViewComponent } from './components/detailed-view/detailed-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ListingServiceService } from './service/listing-service.service';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { UsersService } from './service/users.service';
import { AccountGuard } from './guards/user.guard.guard';
import { AddListingComponent } from './components/property-listing/add-listing/add-listing.component';
import { EditListingComponent } from './components/property-listing/edit-listing/edit-listing.component';
import { ServicesCrudService } from './service/our-services.service';
import { ResuableInputComponent } from './components/reuseable/resuable-input/resuable-input.component';
import { TestComponent } from './components/test/test.component';
import { TeamService } from './service/team-services.service';
import { TeamComponent } from './components/team/team.component';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    ImageSlidesComponent,
    ListItemComponent,
    GoogleMapComponent,
    HeaderComponent,
    CardsComponent,
    DetailedViewComponent,
    ComponentNotFoundComponent,
    FooterComponent,
    LoginComponent,
    AddListingComponent,
    EditListingComponent,
    ResuableInputComponent,
    TestComponent,
    TeamComponent,
    TeamDetailComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'Your API Key'
    })
  ],
  providers: [ListingServiceService, UsersService, AccountGuard, ServicesCrudService, TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
