import express from "express";
const router = express.Router();
import {
  addEmployeeController,
  loginController,
  get_userController,
  get_alluserController,
  update_userController,
  delete_userController,
  adminController,
  locationController,
  getattendanceController,
} from "../Controllers";

//POST
router.post("/addEmployee", addEmployeeController.addEmployee);
// router.post("/location", locationController.location);
router.post("/login", loginController.login);
router.post("/admin", adminController.admin);

// GET
router.get("/getuser/:id", get_userController.getUser);
router.get("/getalluser", get_alluserController.getAllUser);
router.get("/getattendance", getattendanceController.getAttendance);

// PUT
router.put("/updateuser/:id", update_userController.updateUser);

// Delete
router.delete("/deleteUser/:id", delete_userController.deleteUser);

export default router;
