import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { MainPageComponent } from './components/main-page/main-page.component';

const appRoutes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'ranking', component: RankingComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MainPageComponent, RankingComponent]
