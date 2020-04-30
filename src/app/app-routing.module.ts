import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import {UserModuleModule} from './userModule/user-module.module';
//import {AdminModuleModule} from './adminModule/admin-module.module';

import {LandingPageComponent} from './main_components/landing-page/landing-page.component'
import {PageNotFoundComponent} from './main_components/page-not-found/page-not-found.component';

const routes: Routes = [
  //{path: 'users', loadChildren: './userModule/user-module.module#UserModuleModule'},
  //{path: 'admins', loadChildren: './adminModule/admin-module.module#AdminModuleModule'},
    {path: '', component: LandingPageComponent},
    {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
