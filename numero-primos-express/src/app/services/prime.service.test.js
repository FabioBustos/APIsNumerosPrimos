const { isPrimo } = require('./prime.service');
const { getPrimeService } = require('./prime.service');



  describe('test isPrimo()', () => {
    it('should a true boolean is expected if it is a prime number', () => {
      expect(isPrimo(2)).toEqual(true);
    });

    it('should a false boolean is expected if it is not a prime number', () => {
      expect(isPrimo(4)).toEqual(false);
    });
  });
