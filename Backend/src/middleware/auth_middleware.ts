import { verify} from "jsonwebtoken"
import {NextFunction, Request, Response} from "express"

export let middleware = (req:Request, res:Response, next:NextFunction) => {
    let token = (req.headers["token"] as string).split(" ")[1] || ""; // i'm tring to get the second element of this string
                                                                      // Bearer IEFHOIZEUGFPUEYGFIUZF
    let isValid = verify(token, process.env.SECRET as string)

    if(isValid){
        next()
    }else{
        res.status(401).json({msg: "UNAUTHORIZED"})
    }
}