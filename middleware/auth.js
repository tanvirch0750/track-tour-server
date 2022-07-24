import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();

const secret = process.env.ACCESS_TOKEN_SECRET;

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    let decodedData;
    if (token) {
      decodedData = jwt.verify(token, secret);
      req.userId = decodedData?.id;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
