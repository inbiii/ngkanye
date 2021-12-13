import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanyeComponent } from './kanye/kanye.component';

const routes: Routes = [{ path: 'ye', component: KanyeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
