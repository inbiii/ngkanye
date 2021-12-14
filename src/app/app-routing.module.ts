import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreasureComponent } from './treasure/treasure.component';


const routes: Routes = [{ path: "ye", component: TreasureComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
