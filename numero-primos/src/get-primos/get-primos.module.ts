import { Module } from '@nestjs/common';
import { GetPrimosService } from './get-primos.service';
import { GetPrimosController } from './get-primos.controller';

@Module({
  controllers: [GetPrimosController],
  providers: [GetPrimosService]
})
export class GetPrimosModule {}
