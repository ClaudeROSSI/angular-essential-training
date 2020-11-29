import { Routes, RouterModule } from '@angular/router';
import { MediaItemFormComponent } from './media-item-form.component';

const newItemRoutes: Routes = [
  {
    // Lazy loading - /add is now part of the  parent router!!!
    // path: 'add',
    path: '',
    component: MediaItemFormComponent
  }
];

export const newItemRouting = RouterModule.forChild(newItemRoutes);
