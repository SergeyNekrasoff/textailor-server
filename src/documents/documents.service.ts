import { Injectable } from '@nestjs/common';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Document } from './entities/document.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DocumentsService {
  constructor(
    @InjectRepository(Document)
    private documentsRepository: Repository<Document>
  ) {}

  async createDocument(createDocumentDto: CreateDocumentDto): Promise<Document> {
    const doc = this.documentsRepository.create(createDocumentDto);
    return this.documentsRepository.save(doc);
  }

  async getAllDocuments(): Promise<Document[]> {
    return this.documentsRepository.find();
  }

  async getDocumentById(id: number): Promise<Document | undefined> {
    return this.documentsRepository.findOne({ where: { id } });
  }

  async updateDocument(id: number, updateDocumentDto: UpdateDocumentDto): Promise<Document> {
    await this.documentsRepository.update(id, updateDocumentDto);
    return this.getDocumentById(id);
  }

  async deleteDocument(id: number): Promise<void> {
    await this.documentsRepository.delete(id);
  }
}
