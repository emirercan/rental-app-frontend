import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HouseListComponent } from './components/house-list/house-list.component';
import { HouseFormComponent } from './components/house-form/house-form.component';
const routes: Routes = [
  { path: 'kiralık', component: HouseListComponent },
  { path: 'ilan-ver', component: HouseFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
