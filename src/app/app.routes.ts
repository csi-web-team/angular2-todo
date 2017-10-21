import { Routes, RouterModule } from '@angular/router';
import { DesignComponent } from './design/design.component';
import { UsersComponent } from './users/users.component';

// Route config let's you map routes to components
const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'clarity.design',
    component: DesignComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  // map '/' to '/persons' as our default route
  {
    path: '',
    redirectTo: '/clarity.design',
    pathMatch: 'full'
  },
];

export const appRouterModule = RouterModule.forRoot(routes);