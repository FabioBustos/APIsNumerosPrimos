
 function isPrimo(id) {
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

function getPrimeService  (req, res)  {
    let arrayPrimos=[]
    for (let index= req.params.id ; index >= 2 ; index--) {
      if(isPrimo(index))
        arrayPrimos.push(index)
    }
    res.status(200).json({primos:arrayPrimos});
}

module.exports = {  
    getPrimeService,
    isPrimo
};


