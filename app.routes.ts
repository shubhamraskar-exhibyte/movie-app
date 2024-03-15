import { Routes } from '@angular/router';
import { BrowserComponent } from './pages/browser/browser.component';
import { HomeComponent } from './pages/home/home.component';
import { TrendComponent } from './pages/trend/trend.component';
import { SavedComponent } from './pages/saved/saved.component';
import { SettingComponent } from './pages/setting/setting.component';
import { MovieDetailsComponent } from './component/movie-details/movie-details.component';

export const routes: Routes = [
 
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'browse',
    component: BrowserComponent,
  },
  {
    path: 'trend',
    component: TrendComponent,
  },
  {
    path: 'saved',
    component: SavedComponent,
  },
  {
    path: 'setting',
    component: SettingComponent,
  },
  {
    path: 'details',
    component: MovieDetailsComponent,
  },
];
