import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { SharedModule } from '../../../shared/shared.module';
import {chatComponent} from './chat.component'
import {chatRoutingModule} from './chat-routing.module'
@NgModule({
  declarations: [chatComponent],
  imports: [
    CommonModule,
    chatRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    EmojiModule,
    PickerModule
  ],
})
export class chatModule { }
