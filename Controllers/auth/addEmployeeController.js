import joi from "joi";
import { Employee } from "../../models";
import bcrypt from "bcrypt";
import CustomErrorHandler from "../../Service/CustomErrorHandler";
import JwtService from "../../Service/JwtService";
const addEmployeeController = {
  async addEmployee(req, res, next) {
    const addEmploy = joi.object({
      name: joi.string().required(),
      email: joi.string().email().required(),
      password: joi.required(),
      phone: joi.number().required().min(10),
      jobrole: joi.string().required(),
      joiningDate: joi.string(),
    });

    //validate the request
    const { error } = addEmploy.validate(req.body);

    if (error) {
      return next(error);
    }

    const { name, email, password, phone, jobrole, joiningDate, role } =
      req.body;

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // perpare the model.
    const emp = new Employee({
      name,
      email,
      password: hashedPassword,
      phone,
      jobrole,
      joiningDate,
      role,
    });

    try {
      // save the employee in the database
      await emp.save();
    } catch (err) {
      return next(err);
    }
    res.status(200).json({
      message: "added",
    });
  },
};

export default addEmployeeController;
