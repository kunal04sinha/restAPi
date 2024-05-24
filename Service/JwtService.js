import { JWT_SECERT } from "../config";
import jwt from "jsonwebtoken";
class JwtService {
  static sign(payload, expiry = "60", sercet = JWT_SECERT) {
    return jwt.sign(payload, sercet, { expiresIn: expiry });
  }
}

export default JwtService;
