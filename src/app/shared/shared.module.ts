import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';


import { HeaderComponent } from './components/header/header.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { FilterComponent } from './components/filter/filter.component';
import { FilterInputComponent } from './components/filter-input/filter-input.component';
import { ContractorListComponent } from './components/contractor-list/contractor-list.component';
import { StatusBadgeComponent } from './components/status-badge/status-badge.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HeaderMenuComponent,
    FilterComponent,
    FilterInputComponent,
    ContractorListComponent,
    StatusBadgeComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatMenuModule
  ],
  exports: [
    HeaderComponent,
    HeaderMenuComponent,
    FilterComponent,
    FilterInputComponent,
    ContractorListComponent,
    StatusBadgeComponent
  ]
})
export class SharedModule { }
