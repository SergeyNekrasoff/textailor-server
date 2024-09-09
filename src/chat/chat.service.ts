import { OpenAI, CreateCompletionRequest } from 'openai';
import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';

@Injectable()
export class ChatService {
  private readonly OpenAIApi: OpenAI;

  constructor() {
    const configuration = new Configuration({
      organization: process.env.ORGANIZATION_ID,
      apiKey: process.env.OPENAI_API_KEY,
    });

    this.OpenAIApi = new OpenAI(configuration);
  }

  async createCompletion({
    question,
    model,
    temperature,
  }: CreateChatDto) {
    try {
      const params: CreateCompletionRequest = {
        prompt: question,
        model: model || 'text-davinci-003',
        temperature: temperature || 0.9,
      };

      const { data } = await this.OpenAIApi.createCompletion(params);

      return data;
    } catch (error) {
      throw new Error(error);
    }
  };
}
