import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ViagemModule } from './viagem/viagem.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/viagem-db'),
    ViagemModule,
  ],
})
export class AppModule {}