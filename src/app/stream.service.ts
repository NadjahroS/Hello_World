// stream.service.ts

import { Injectable } from '@angular/core';
import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {
  ChatClientService,
  ChannelService,
  StreamI18nService,
  MessageContext,
  CustomTemplatesService,
  ChannelPreviewContext,
} from 'stream-chat-angular';

@Injectable({
  providedIn: 'root',
})
export class StreamService {
  @ViewChild('customMessageTemplate') messageTemplate!: TemplateRef<MessageContext>;
  @ViewChild('customChannelPreviewTemplate') channelPreviewTemplate!: TemplateRef<ChannelPreviewContext>;

  constructor(
    private chatService: ChatClientService,
    private channelService: ChannelService,
    private streamI18nService: StreamI18nService,
    private customTemplatesService: CustomTemplatesService
  ) {
    const apiKey = 'dz5f4d5kzrue';
    const userId = 'black-star-9';
    const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYmxhY2stc3Rhci05IiwiZXhwIjoxNzAwNzQ5MTMwfQ.jYdmpiqIE7XHfsYINUexNMY8O7bhS1QEfb4FklrZle4';
    this.chatService.init(apiKey, userId, userToken);
    this.streamI18nService.setTranslation();
  }

  async initializeStreamChat(apiKey: string, userId: string, userToken: string) {
      const channel = this.chatService.chatClient.channel('messaging', 'talking-about-angular', {
        // add as many custom fields as you'd like
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
        name: 'Talking about Angular',
      });
      await channel.create();
      this.channelService.init({
        type: 'messaging',
        id: { $eq: 'talking-about-angular' },
      });
    }

  ngAfterViewInit(): void {
    // Register your template
    this.customTemplatesService.messageTemplate$.next(this.messageTemplate);
    this.customTemplatesService.channelPreviewTemplate$.next(this.channelPreviewTemplate);
  }
}
