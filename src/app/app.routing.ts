import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const appRoutes: Routes = [
    { path: '',loadChildren: './layout/layout.module#LayoutModule'},
  // { path: 'homepage', loadChildren: './homepage/homepage.module#HomepageModule'},
  // { path: '', redirectTo:'homepage', pathMatch: 'full' },
  ]
  export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);