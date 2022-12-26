const userController = require("../DL/controllers/userController.js");
const jwtFn = require("./jwt");

// ---------------------------------------------------------------------register
async function register(user) {
  const { email, password, userName } = user;
  if (!email || !password || !userName) {
    throw { code: 400, message: "missing data" };
  }
  const exsistUser = await userController.readOn({ email: email });
  if (exsistUser.length > 0) {
    console.log("duplicated email");
    throw { code: 400, message: "duplicated email" };
  } else {
    userController.create(user);
    const token = jwtFn.createToken(user._id);
    return {
      code: 200,
      msg: user[0],
      token: token,
    };
  }
}

// ---------------------------------------------------------------------login
async function login(data) {
  console.log("login logic:   " + data.user.password);
  const user = await userController.readOn(
    { email: data.user.email },
    "+password"
  );
  console.log("user ====>  " + user);
  if (user.length < 1) {
    throw { code: 400, message: "user does not exist" };
  }
  if (data.user.password !== user[0].password) {
    throw { code: 400, message: "wrong password" };
  } else {
    console.log(user[0]._id);
    const token = jwtFn.createToken(user[0]._id);
    return {
      code: 200,
      msg: user[0],
      token: token,
    };
  }
}

// ---------------------------------------------------------------------

module.exports = { register, login };
