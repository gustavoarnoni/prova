import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ViagemService } from './viagem.service';

@Controller('viagem')
export class ViagemController {
  constructor(private readonly viagemService: ViagemService) {}

  @Post()
  async create(@Body() viagem: any) {
    return this.viagemService.create(viagem);
  }

  @Get()
  async findAll() {
    return this.viagemService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string) {
    return this.viagemService.update(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.viagemService.delete(id);
  }
}