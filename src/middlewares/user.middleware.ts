import { NextFunction, Request, Response } from 'express'

export const autorizationUser = (req: Request, res: Response, next: NextFunction) =>{
    
    if(!req.headers.authorization || req.headers.authorization !== "Bearer 65a83e72c7e990a3e6565ae8b7cc071c"){
        
        res.status(401).send("Unauthorized");
    }else{

        next();
    }

}