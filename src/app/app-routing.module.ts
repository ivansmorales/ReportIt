import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import {UserModuleModule} from './userModule/user-module.module';

import {PageNotFoundComponent} from './main_components/page-not-found/page-not-found.component';

const routes: Routes = [
    {path: '**', component: PageNotFoundComponent }
];
  //{path: 'users', loadChildren: './userModule/user-module.component#UserModuleModule'},

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
