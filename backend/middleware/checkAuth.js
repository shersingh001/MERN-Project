import jwt from "jsonwebtoken";
import UserModel from "../model/user.js";

const checkUserAuth = async(req, res, next) => {
    let token;
    const { authorization } = req.headers
    if(authorization && authorization.startsWith('Bearer')){
        try{
            token = authorization.split(' ')[1]

            // Verify Token
            const { userID } = jwt.verify(token, process.env.JWT_SECRET_KEY);

            // Get User
            req.user = await UserModel.findById(userID).select('-password');
            next();
        }
        catch(error){
            return res.status(401).json({error: "Unauthorized User"});
        }
    }
    if (!token){
        return res.status(401).json({error: "Unauthorized User, No Token"});
    }
};

export default checkUserAuth;