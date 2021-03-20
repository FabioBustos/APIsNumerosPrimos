import { Module } from '@nestjs/common';
import { GetPrimosModule } from './get-primos/get-primos.module';

@Module({
  imports: [GetPrimosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
