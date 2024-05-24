import CustomErrorHandler from "../../Service/CustomErrorHandler";
import { Employee } from "../../models";

const delete_userController = {
  async deleteUser(req, res, next) {
    try {
      const id = req.params.id;
      const emp = await Employee.findByIdAndDelete(id);

      res.status(200).json({
        message: "User was delete successfully",
      });
    } catch (err) {
      return next(err);
    }
  },
};

export default delete_userController;
