import { Location } from "../../models";

const getattendanceController = {
  async getAttendance(req, res, next) {
    try {
      const attendance = await Location.find().select("-_id -__v");

      res.status(200).json({ DataLength: attendance.length, attendance });
    } catch (err) {
      return next(err);
    }
  },
};

export default getattendanceController;
