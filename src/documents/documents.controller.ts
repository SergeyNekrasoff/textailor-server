import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';

@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Post()
  createDocument(@Body() createDocumentDto: CreateDocumentDto) {
    return this.documentsService.createDocument(createDocumentDto);
  }

  @Get()
  getAllDocuments() {
    return this.documentsService.getAllDocuments();
  }

  @Get(':id')
  getDocumentById(@Param('id') id: number) {
    return this.documentsService.getDocumentById(id);
  }

  @Patch(':id')
  updateDocument(@Param('id') id: number, @Body() updateDocumentDto: UpdateDocumentDto) {
    return this.documentsService.updateDocument(id, updateDocumentDto);
  }

  @Delete(':id')
  deleteDocument(@Param('id') id: number) {
    return this.documentsService.deleteDocument(id);
  }
}
