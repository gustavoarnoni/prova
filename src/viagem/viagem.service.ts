import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Viagem } from './viagem.schema';

@Injectable()
export class ViagemService {
  constructor(
    @InjectModel(Viagem.name) private viagemModel: Model<Viagem>,
  ) {}

  async create(viagem: any): Promise<Viagem> {
    const newViagem = new this.viagemModel(viagem);
    return newViagem.save();
  }

  async findAll(): Promise<Viagem[]> {
    return this.viagemModel.find().exec();
  }

  async update(id: string): Promise<any> {
    return this.viagemModel.findByIdAndUpdate(id, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return this.viagemModel.findByIdAndDelete(id).exec();
  }
}