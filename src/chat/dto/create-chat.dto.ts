import { IsString } from "class-validator";

export class CreateChatDto {
  @IsString()
  question: string;

  @IsString()
  model?: string;

  @IsString()
  temperature?: number;
}
