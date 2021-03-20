import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiResponse } from '@nestjs/swagger';
import { InputDto } from './dto/input.dto';
import { GetPrimosService } from './get-primos.service';

@Controller('primos')
export class GetPrimosController {
  constructor(private readonly getPrimosService: GetPrimosService) {}

  @Get(':id')
  @ApiResponse({ status: 200, description: 'The search prime number has been successfully created.'})
  @ApiResponse({ status: 400, description: 'Bad Request'})
  findPrimos( @Param()
    input: InputDto,
  ){
    return this.getPrimosService.findPrimos(input.id);
  }
}
