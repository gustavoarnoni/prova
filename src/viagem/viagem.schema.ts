import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Viagem extends Document {
  @Prop({ required: true })
  nome: string;

  @Prop({ required: true })
  dataSaida: Date;

  @Prop({ required: true })
  dataChegada: Date;

  @Prop({ required: true })
  valor: number;
}

export const ViagemSchema = SchemaFactory.createForClass(Viagem);