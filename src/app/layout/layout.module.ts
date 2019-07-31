import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
// import { HeaderComponent } from '../component/header/header.component';
import { HeaderComponent } from '../component/header/header.component'
import { SidebarComponent } from '../component/sidebar/sidebar.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
