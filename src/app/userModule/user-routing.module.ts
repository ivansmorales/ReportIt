import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LogInUserComponent} from './log-in-user/log-in-user.component';
import {RegisterUserComponent} from './register-user/register-user.component';
import {ReportsComponent} from './reports/reports.component';
import {ReportsUserComponent} from './reports-user/reports-user.component';

const routes: Routes = [
    {path: 'loginUser', component: LogInUserComponent},
    {path: 'registerUser', component: RegisterUserComponent},
    {path: 'reports', component: ReportsComponent},
    {path: 'reports-User', component: ReportsUserComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule{}
