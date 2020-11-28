import { Routes, RouterModule } from '@angular/router';
import { MediaItemFormComponent } from './media-item-form.component';
import { MediaItemListComponent } from './media-item-list.component';

const appRoutes: Routes = [{
    path: 'add',
    component: MediaItemFormComponent
}, {
    path: ':medium',
    component: MediaItemListComponent
}, {
    path: '',
    redirectTo: 'all',
    pathMatch: 'full'
}];


// forRoot() - static method to initialize a router instance based on an array of routes 
export const routing = RouterModule.forRoot(appRoutes);
