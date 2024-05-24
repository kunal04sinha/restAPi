import joi from "joi";
import bcrypt from "bcrypt";
import CustomErrorHandler from "../../Service/CustomErrorHandler";
import { Employee } from "../../models";

const adminController = {
  async admin(req, res, next) {
    const admin = joi.object().keys({
      email: joi.string().email().required(),
      password: joi.string().required(),
    });

    //validate the request
    const { error } = admin.validate(req.body);

    if (error) {
      return next(error);
    }

    try {
      const emp = await Employee.findOne({ email: req.body.email });
      if (!emp) {
        return res.json({ error: "Invalid" });
      }
      let role = emp.role;
      role = role.toLowerCase();
      if (role !== "admin") {
        return res.json({ error: "Invalid" });
      }
      const match = await bcrypt.compare(req.body.password, emp.password);

      if (!match) {
        return res.json({ error: "Invalid" });
      }
      res.status(200).json({
        message: "Welcome Admin",
      });
    } catch (e) {
      return next(e);
    }
  },
};

export default adminController;
