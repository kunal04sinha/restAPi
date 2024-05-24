import CustomErrorHandler from "../../Service/CustomErrorHandler";
import { Employee } from "../../models";

const update_userController = {
  async updateUser(req, res, next) {
    try {
      //Giving the if body is empty
      if (!req.body) {
        return res.status(404).json({
          message: "Please Valid ID",
        });
      }
      const id = req.params.id;
      //Upating the user
      const user = await Employee.findByIdAndUpdate(id, req.body, {
        useFindAndModify: false,
      });

      //Not in database
      if (!user) {
        return next(CustomErrorHandler.notExists());
      }
      res.status(200).json({
        message: "User updated successfully",
      });
    } catch (err) {
      return next(err);
    }
  },
};

export default update_userController;
