import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ViagemController } from './viagem.controller';
import { ViagemService } from './viagem.service';
import { Viagem, ViagemSchema } from './viagem.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Viagem.name, schema: ViagemSchema }])
  ],
  controllers: [ViagemController],
  providers: [ViagemService],
})
export class ViagemModule {}