
module.exports = {  
    
    validate: async  (req, res,next) => {
        console.log('validator');
        console.log(req.params.id );
        console.log(typeof req.params.id );
        let errorMessage=[]
        if(!req.params.id ){
            errorMessage.push('id is required')
        }

        if(!(/^-?\d+$/.test(req.params.id))){
            errorMessage.push('id must be an integer number')
        }
        
        if(req.params.id <= 2){
            errorMessage.push('id must not be less than 2')
        }
        
        if(errorMessage.length>0){
            res.status(400).json({
                statusCode: 400,
                message: errorMessage,
                error: "Bad Request"
            });
        }
     

        next()
    }   
};
