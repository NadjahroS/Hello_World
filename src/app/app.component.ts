import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { ChannelService, ChatClientService, StreamI18nService } from 'stream-chat-angular';
import { StreamService } from './services/stream.service';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { EMPTY, catchError, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(
    private api: ApiService,
    private auth: AuthService,
    private chatService: ChatClientService,
    private channelService: ChannelService,
    private streamI18nService: StreamI18nService,
  ) {}

  ngOnInit() {
    const apiKey = '63bygjq8kbu4';

    if (this.auth.isAuthenticated$) {
      this.auth.user$.subscribe(user => {
        if (user && user.name) {
          const name = user.name+'2';

          this.api.getToken(name).subscribe(response => {
            const token = response;
            console.log('Token: ', token);

            this.api.addUser(name);
            this.api.addUser(name + '2');

            // Initialize chat service and set translation
            this.chatService.init(apiKey, name, token);
            this.streamI18nService.setTranslation();

            // Initialize channel
            const channel = this.chatService.chatClient.channel('messaging', 'talking-about-angular', {
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
              name: 'Talking about Angular',
            });

            channel.create();
            this.channelService.init({
              type: 'messaging',
              id: { $eq: 'talking-about-angular' },
            });

            
          });
          var testt = '';
          this.api.getChannel('messaging', 'testtt', name, name+'2')
          .subscribe(response => {
            console.log(response);
            testt = response.channel.id;
            console.log(testt);

            this.channelService.init({
            type: 'messaging',
            id: { $eq: testt },
          });
          });
        } else {
          console.log('User not available or name is undefined');
        }
      });
    }
  }
}