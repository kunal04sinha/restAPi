import CustomErrorHandler from "../../Service/CustomErrorHandler";
import { Employee } from "../../models";

const get_alluserController = {
  async getAllUser(req, res, next) {
    try {
      const employee = await Employee.find({ role: "Employee" }).select(
        "-password -createdAt -updatedAt -role -__v"
      );

      res.status(200).json({ DataLength: employee.length, employee });
    } catch (err) {
      return next(err);
    }
  },
};

export default get_alluserController;
