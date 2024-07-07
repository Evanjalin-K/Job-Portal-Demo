const jwt = require('jsonwebtoken')
const {SECRET_KEY} = require('../utils/config')
const auth = {
    // next will move the functiion to next
    verifyToken: ( req, res , next) =>{
 
try {
    
//get the token from the cookie

const token = req.cookies.token;

//if toke doesnot exits, return an error

if(!token){
    return res.status(401).send({message:'Access Denied'})
}

//Verify the Token
 try{
   const decodedToken = jwt.verify(token, SECRET_KEY);

  //set the userid in the request object
  
   req.userId = decodedToken.id

   // call the Next middleware

   next();

 }
catch{
    return res.status(401).send ({ message: 'Invalid token'})
}


} catch (error) {
    res.status(500).send( { message: error.message });
}

    }

}

module.exports = auth;