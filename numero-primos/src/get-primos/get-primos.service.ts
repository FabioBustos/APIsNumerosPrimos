import { Injectable } from '@nestjs/common';

@Injectable()
export class GetPrimosService {
  findPrimos(id:number) {
    let arrayPrimos=[]
    for (let index= id ; index >= 2 ; index--) {
      if(this.isPrimo(index))
        arrayPrimos.push(index)
    }
    return {primos:arrayPrimos}
  }

  isPrimo(id: number) {
    let contador = 0
    for (let index = 2; index <= id; index++) {
      if(id%index===0){
        contador++
      }
    }
    if(contador===1)
      return true
    return false
  }

}
