class CustomErrorHandler extends Error {
  constructor(status, msg) {
    super();
    this.status = status;
    this.message = msg;
  }
  static alreadyExists(message) {
    return new CustomErrorHandler(409, message);
  }

  static wrongCredentails(message = "Invalid credentials!") {
    return new CustomErrorHandler(401, message);
  }

  static notExists(message = "Employee does not exist!") {
    return new CustomErrorHandler(401, message);
  }

  static notAdmin(message = "You are not Administrator") {
    return new CustomErrorHandler(401, message);
  }
  static admin(message = "You are Not Employee") {
    return new CustomErrorHandler(401, message);
  }
}

export default CustomErrorHandler;
