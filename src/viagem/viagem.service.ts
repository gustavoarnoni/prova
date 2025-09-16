import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Viagem } from './viagem.schema';
import { CreateViagemDto, UpdateViagemDto, AddDestinoDto, RemoveDestinoDto } from './dto/viagem.interface';

@Injectable()
export class ViagemService {
  constructor(
    @InjectModel(Viagem.name) private viagemModel: Model<Viagem>,
  ) {}

  async create(createViagemDto: CreateViagemDto): Promise<Viagem> {
    try {
      const newViagem = new this.viagemModel(createViagemDto);
      return await newViagem.save();
    } catch (error) {
      throw new Error(`Failed to create viagem: ${error.message}`);
    }
  }

  async findAll(): Promise<Viagem[]> {
    try {
      return await this.viagemModel.find().exec();
    } catch (error) {
      throw new Error(`Failed to fetch viagens: ${error.message}`);
    }
  }

  async findOne(id: string): Promise<Viagem> {
    try {
      const viagem = await this.viagemModel.findById(id).exec();
      if (!viagem) {
        throw new NotFoundException(`Viagem with ID ${id} not found`);
      }
      return viagem;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new Error(`Failed to find viagem: ${error.message}`);
    }
  }

  async update(id: string, updateViagemDto: UpdateViagemDto): Promise<Viagem> {
    try {
      const updatedViagem = await this.viagemModel
        .findByIdAndUpdate(id, updateViagemDto, { new: true })
        .exec();

      if (!updatedViagem) {
        throw new NotFoundException(`Viagem with ID ${id} not found`);
      }

      return updatedViagem;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new Error(`Failed to update viagem: ${error.message}`);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const result = await this.viagemModel.findByIdAndDelete(id).exec();
      if (!result) {
        throw new NotFoundException(`Viagem with ID ${id} not found`);
      }
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new Error(`Failed to delete viagem: ${error.message}`);
    }
  }

  async addDestino(id: string, addDestinoDto: AddDestinoDto): Promise<Viagem> {
    try {
      const viagem = await this.findOne(id);

      const destinoExists = viagem.destinos.some(
        destino => destino.nome === addDestinoDto.nome
      );

      if (destinoExists) {
        throw new BadRequestException(`Destino ${addDestinoDto.nome} already exists in this viagem`);
      }

      const updatedViagem = await this.viagemModel
        .findByIdAndUpdate(
          id,
          { $push: { destinos: { nome: addDestinoDto.nome } } },
          { new: true }
        )
        .exec();

      return updatedViagem;
    } catch (error) {
      if (error instanceof NotFoundException || error instanceof BadRequestException) {
        throw error;
      }
      throw new Error(`Failed to add destino: ${error.message}`);
    }
  }

  async removeDestino(id: string, removeDestinoDto: RemoveDestinoDto): Promise<Viagem> {
    try {
      const viagem = await this.findOne(id);

      const destinoExists = viagem.destinos.some(
        destino => destino.nome === removeDestinoDto.nome
      );

      if (!destinoExists) {
        throw new NotFoundException(`Destino ${removeDestinoDto.nome} not found in this viagem`);
      }

      const updatedViagem = await this.viagemModel
        .findByIdAndUpdate(
          id,
          { $pull: { destinos: { nome: removeDestinoDto.nome } } },
          { new: true }
        )
        .exec();

      return updatedViagem;
    } catch (error) {
      if (error instanceof NotFoundException || error instanceof BadRequestException) {
        throw error;
      }
      throw new Error(`Failed to remove destino: ${error.message}`);
    }
  }
}