import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BasicFormComponent} from './components/basic-form/basic-form.component'
import {DashboardComponent} from './components/dashboard/dashboard.component'
import {TableComponent} from './components/table/table.component'
import {RecipesComponent} from './components/recipes/recipes.component'
import {EmailComponent} from './components/email/email.component'
import {SpotifyComponent} from './components/spotify/spotify.component'
import {ToDoComponent} from './components/to-do/to-do.component'
import { UiComponentComponent } from './components/ui-component/ui-component.component';

const routes: Routes = [
  {
    path: 'basic-form',
    component: BasicFormComponent,
    title: 'Basic Form'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Covid 19 Tracking Dashboard'
  },
  {
    path: 'table',
    component: TableComponent,
    title: 'Basic Form'
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    title: 'Recipes'
  },
  {
    path: 'email',
    component: EmailComponent,
    title: 'Email'
  }, 
  {
    path: 'spotify',
    component: SpotifyComponent,
    title: 'Spotify Replica'
  },
  {
    path: 'to-do',
    component: ToDoComponent,
    title: 'To Do App'
  },
  {
    path: 'youtube',
    component: UiComponentComponent,
    title: 'Youtube Replica'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
