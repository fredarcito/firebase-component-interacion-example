import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AngularFireModule} from 'angularfire2';

import {environment} from '../environments/environment';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {WrapperUserComponent} from './components/wrapper-user/wrapper-user.component';
import {UserSelectorComponent} from './components/user-selector/user-selector.component';
import {UserCreatorComponent} from './components/user-creator/user-creator.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {UserService} from './services/user/user.service';
import {AngularFirestoreModule} from 'angularfire2/firestore';


@NgModule({
  declarations: [
    AppComponent,
    WrapperUserComponent,
    UserSelectorComponent,
    UserCreatorComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
