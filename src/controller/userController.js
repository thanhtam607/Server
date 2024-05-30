import userServicer from "../services/userServicer";
let userLogin = async (req, res) => {
  const email = req.body.email;
  const pass = req.body.pass;
  if (!email || !pass) {
    return res.status(500).json({
      errCode: 1,
      message: "Xin nhập 2 trường email va password",
    });
  }
  const data = await userServicer.userLoginServicer(email, pass);
  return res.status(200).json({
    errCode: data.errCode,
    message: data.message,
    data: data.user ? data.user : {},
  });
};

let getAllUsers = async (req, res) => {
  const data = await userServicer.getAllUsers();
  return res.status(200).json({
    errCode: data.errCode,
    message: data.message,
    data: data,
  });
};

let handleCreateNewUser = async (req, res) => {
  const data = await userServicer.createUser(req.body);
  return res.status(200).json({
    errCode: data.errCode,
    message: data.message,
  });
};

module.exports = {
  userLogin: userLogin,
  getAllUsers: getAllUsers,
  handleCreateNewUser: handleCreateNewUser,
};
