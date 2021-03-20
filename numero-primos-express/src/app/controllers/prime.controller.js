const PrimeService = require('../services/Prime.service')
module.exports = {  
    
    getPrimeController: async  (req, res) => {
        return  await PrimeService.getPrimeService(req,res)
    }   
};
