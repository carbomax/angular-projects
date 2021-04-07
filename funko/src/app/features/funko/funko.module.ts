import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunkoRoutingModule } from './funko-routing.module';

// External modules
import { MaterialModule } from 'src/app/material/material.module';
import { FunkosComponent } from './pages/funkos/funkos.component';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    HomeComponent,
    FunkosComponent
  ],
  imports: [
    CommonModule,
    FunkoRoutingModule,
    MaterialModule
  ]
})
export class FunkoModule { }
