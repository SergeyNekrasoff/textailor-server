import { Body, Post, Controller } from "@nestjs/common";
import { ChatService } from "./chat.service";
import { CreateChatDto } from "./dto/create-chat.dto";

@Controller('completion')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  async createCompletion(@Body() createChatDto: CreateChatDto) {
    return this.chatService.createCompletion(createChatDto);
  }
}