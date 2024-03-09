import jwt from 'jsonwebtoken'


export const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.Authorization || req.headers.authorization

    if(!authHeader?.startsWith('Bearer ')){
        return res.status(401).json({ message: "Unauthorized access!" })
    }

    

    const token = authHeader.split(" ")[1]
    
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if(err) return res.status(403).json({message: "Forbidden"})
            req.email = decoded.email
            next()
        }
    )
    
    


}