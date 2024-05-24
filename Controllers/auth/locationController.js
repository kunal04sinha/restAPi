import joi from "joi";
import { Location } from "../../models";
import { Employee } from "../../models";

const locationController = {
  async location(req, res, next) {
    const locations = joi.object({
      email: joi.string().email().required(),
      location: joi.string().required(),
    });

    const { error } = locations.validate(req.body);

    if (error) {
      return next(error);
    }

    const { email, location } = req.body;

    const c = await Employee.findOne({ email: req.body.email });
    if (!c) {
      return res.status(200).json({ message: "Your Not a Employee" });
    }

    const name = c.name;

    //Prepare the model
    const loc = new Location({
      name,
      email,
      location,
    });
    try {
      const m = await Location.findOne({ email: req.body.email });
      if (!m) {
        await loc.save();
        return res.status(200).json({ message: "done" });
      }
      return res
        .status(200)
        .json({ message: "Your attendance is already marked" });
    } catch (e) {
      return next(e);
    }
    res.status(200);
  },
};

export default locationController;
