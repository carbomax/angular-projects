
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { FunkosComponent } from './pages/funkos/funkos.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {
        path: 'funkos', component: FunkosComponent
      },
      {
        path: '**', redirectTo: 'funkos'
      }
    ]
  }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class FunkoRoutingModule { }