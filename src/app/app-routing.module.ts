import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CallbackComponent } from './callback/callback.component';
import { ProfileComponent } from './profile/profile.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'chat', component: ChatComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
