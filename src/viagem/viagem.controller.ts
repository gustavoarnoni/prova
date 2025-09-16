import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ViagemService } from './viagem.service';
import { CreateViagemDto, UpdateViagemDto, AddDestinoDto, RemoveDestinoDto } from './dto/viagem.interface';

@Controller('viagem')
export class ViagemController {
  constructor(private readonly viagemService: ViagemService) {}

  @Post()
  create(@Body() createViagemDto: CreateViagemDto) {
    return this.viagemService.create(createViagemDto);
  }

  @Get()
  findAll() {
    return this.viagemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.viagemService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateViagemDto: UpdateViagemDto) {
    return this.viagemService.update(id, updateViagemDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.viagemService.delete(id);
  }

  @Post(':id/destino')
  addDestino(@Param('id') id: string, @Body() addDestinoDto: AddDestinoDto) {
    return this.viagemService.addDestino(id, addDestinoDto);
  }

  @Delete(':id/destino')
  removeDestino(@Param('id') id: string, @Body() removeDestinoDto: RemoveDestinoDto) {
    return this.viagemService.removeDestino(id, removeDestinoDto);
  }
}