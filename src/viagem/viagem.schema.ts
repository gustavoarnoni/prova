import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Destino {
  @Prop({ required: true })
  nome: string;
}

@Schema({ timestamps: true })
export class Viagem extends Document {
  @Prop({ required: true })
  nome: string;

  @Prop({ required: true })
  dataSaida: Date;

  @Prop({ required: true })
  dataChegada: Date;

  @Prop({ required: true })
  valor: number;

  @Prop({ type: [{ nome: String }], default: [] })
  destinos: Destino[];
}

export const ViagemSchema = SchemaFactory.createForClass(Viagem);