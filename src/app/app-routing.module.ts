import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ImageSlidesComponent } from './components/image-slides/image-slides.component';
import { ListItemComponent } from './components/property-listing/list-item.component';
import { CardsComponent } from './components/cards/cards.component';
import { AccountGuard } from './guards/user.guard.guard';
import { LoginComponent } from './components/login/login.component';
import { ComponentNotFoundComponent } from './components/error-message-component/component-not-found/component-not-found.component';
import { DetailedViewComponent } from './components/detailed-view/detailed-view.component';
import { AddListingComponent } from './components/property-listing/add-listing/add-listing.component';
import { TestComponent } from './components/test/test.component';
import { TeamComponent } from './components/team/team.component';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'team' },
  { path: 'admin', loadChildren: './module/admin/admin.module#AdminModule', canActivate: [AccountGuard] },
   { path: 'home', component: HomeComponent },
  { path: 'team', component: TeamComponent },
  { path: 'team/:id', component: TeamDetailComponent },
  { path: 'home', component: HomeComponent },
  { path: 'slides', component: ImageSlidesComponent },
  { path: 'list/add', component: AddListingComponent },
  { path: 'list/:id', component: ListItemComponent },
  { path: 'details/:id', component: DetailedViewComponent },
  { path: 'card', component: CardsComponent },
  { path: 'login', component: LoginComponent },

  { path: '**', component: ComponentNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
