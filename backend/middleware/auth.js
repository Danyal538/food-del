import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const {token} = req.headers;
  if(!token){
    return res.json({success:false, message: "Not Authorized login again"})
  }
  try {
    const token_decode = jwt.verify(token, process.env.SECRET)
    req.body.userId= token_decode.id;
    next();
  } catch (error) {
    console.log(error);
    res.json({success: false, message: "Error"})
  }
}
export default authMiddleware;