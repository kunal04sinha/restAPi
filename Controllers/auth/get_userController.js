import joi from "joi";
import CustomErrorHandler from "../../Service/CustomErrorHandler";
import { Employee } from "../../models";

const get_userController = {
  async getUser(req, res, next) {
    try {
      const id = req.params.id;
      const user = await Employee.findById(id).select(
        "-password -createdAt -updatedAt -__v -role"
      );

      if (!user) {
        return next(CustomErrorHandler.notExists());
      }

      res.json(user);
    } catch (err) {
      return next(err);
    }
  },
};

export default get_userController;
