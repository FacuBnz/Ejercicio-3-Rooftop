import { NextFunction, Request, Response } from 'express'
import fs from "fs"
import moment from 'moment';

export const log = (req: Request, res: Response, next: NextFunction) => {
    
    const date = moment().format('YYYY-MM-DD');
    const hour = moment().format('hh:mm:ss')
    const method = req.method
    const url = req.url
    const routeFile = 'src/logs/'
    const file = routeFile+date+'.log';
    let ip = req.socket.remoteAddress
    ip = ip?.toString().replace(/^.*:/, '');

    if(fs.existsSync(file)){
        fs.appendFileSync(file, `\r\n${ip}, ${date}, ${hour}, ${method}, ${url}`)
    }else{

        fs.writeFileSync(file,`${ip}, ${date}, ${hour}, ${method}, ${url}`)
    }
    

    next();
}