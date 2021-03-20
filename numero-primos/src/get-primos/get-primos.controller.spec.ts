import { Test, TestingModule } from '@nestjs/testing';
import { GetPrimosController } from './get-primos.controller';
import { GetPrimosService } from './get-primos.service';

describe('GetPrimosController', () => {
  let controller: GetPrimosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetPrimosController],
      providers: [GetPrimosService],
    }).compile();

    controller = module.get<GetPrimosController>(GetPrimosController);
  });

  it('should return prime number between 2 and 10 in controller response',async () => {
    expect(controller.findPrimos({id:10})).toEqual({"primos": [7, 5, 3, 2]});
  });
});
