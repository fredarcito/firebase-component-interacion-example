import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WrapperUserComponent} from './components/wrapper-user/wrapper-user.component';

const routes: Routes = [
  {path: '', component: WrapperUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
