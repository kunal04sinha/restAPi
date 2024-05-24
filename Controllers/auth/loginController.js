import joi from "joi";
import bcrypt from "bcrypt";
import CustomErrorHandler from "../../Service/CustomErrorHandler";
import { Employee } from "../../models";
// import JwtService from "../../Service/JwtService";
const loginController = {
  async login(req, res, next) {
    //validate
    const login = joi.object().keys({
      email: joi.string().email().required(),
      password: joi.string().required(),
    });

    const { error } = login.validate(req.body);

    if (error) {
      return next(error);
    }

    try {
      const emp = await Employee.findOne({ email: req.body.email });

      if (!emp) {
        res.json({ message: "Invalid email" });
        return next(CustomErrorHandler.wrongCredentails());
      }

      // compare the password

      const match = await bcrypt.compare(req.body.password, emp.password);

      if (!match) {
        res.json({ message: "Invalid password" });
        return next(CustomErrorHandler.wrongCredentails());
      }

      res.status(200).json({
        mail: emp.email,
        message: "correct credentials",
      });
    } catch (err) {
      return next(err);
    }
  },
};

export default loginController;
