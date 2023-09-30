import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-private-chat',
  templateUrl: './private-chat.component.html',
  styleUrls: ['./private-chat.component.scss']
})
export class PrivateChatComponent {
  @Input() toUser = '';

}
