import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { EditorService } from './editor.service';
import { CreateEditorDto } from './dto/create-editor.dto';
import { UpdateEditorDto } from './dto/update-editor.dto';

@WebSocketGateway()
export class EditorGateway {
  constructor(private readonly editorService: EditorService) {}

  @SubscribeMessage('createEditor')
  create(@MessageBody() createEditorDto: CreateEditorDto) {
    return this.editorService.create(createEditorDto);
  }

  @SubscribeMessage('findAllEditor')
  findAll() {
    return this.editorService.findAll();
  }

  @SubscribeMessage('findOneEditor')
  findOne(@MessageBody() id: number) {
    return this.editorService.findOne(id);
  }

  @SubscribeMessage('updateEditor')
  update(@MessageBody() updateEditorDto: UpdateEditorDto) {
    return this.editorService.update(updateEditorDto.id, updateEditorDto);
  }

  @SubscribeMessage('removeEditor')
  remove(@MessageBody() id: number) {
    return this.editorService.remove(id);
  }
}
