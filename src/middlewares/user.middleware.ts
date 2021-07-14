import { NextFunction, Request, Response } from 'express'

export const autorizationUser = (req: Request, res: Response, next: NextFunction) =>{
    
    if(!req.headers.authorization || req.headers.authorization !== process.env.TOKEN){
        
        res.status(401).send("Unauthorized");
    }else{

        next();
    }

}