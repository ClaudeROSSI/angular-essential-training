import { Routes, RouterModule } from '@angular/router';
import { MediaItemListComponent } from './media-item-list.component';

const appRoutes: Routes = [
  {
    path: 'add',
    loadChildren: () => {
      return import('./new-item/new-item.module').then( childModule => {
          return childModule.NewItemModule;
        }
      )
    }
  },
  { path: ':medium', component: MediaItemListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'all' }
];

export const routing = RouterModule.forRoot(appRoutes);
