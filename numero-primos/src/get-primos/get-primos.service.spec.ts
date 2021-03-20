import { Test, TestingModule } from '@nestjs/testing';
import { GetPrimosService } from './get-primos.service';

describe('GetPrimosService', () => {
  let service: GetPrimosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetPrimosService],
    }).compile();

    service = module.get<GetPrimosService>(GetPrimosService);
  });
  describe('test isPrimo()', () => {
    it('should a true boolean is expected if it is a prime number', () => {
      let resolve = service.isPrimo(2)
      expect(resolve).toEqual(true);
    });
    it('should a false boolean is expected if it is not a prime number', () => {
      let resolve = service.isPrimo(4)
      expect(resolve).toEqual(false);
    });
  });

  describe('test findPrimos()', () => {
    it('should expect a Json with the prime numbers between 2 and 10', () => {
      let resolve = service.findPrimos(10)
      expect(resolve).toEqual({
        "primos": [
            7,
            5,
            3,
            2
        ]
    });
    });
  });
});
