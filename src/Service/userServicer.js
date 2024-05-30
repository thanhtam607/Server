import db from "../models";
import bcrypt from "bcryptjs";

var salt = bcrypt.genSaltSync(10);
let userLoginServicer = (email, pass) => {
  return new Promise(async (resolve, reject) => {
    try {
      const isUser = await checkEmail(email);
      const data = {};
      if (isUser) {
        const user = await db.User.findOne({
          attributes: [
            "id",
            "email",
            "pass",
            "role",
            "name",
            "address",
            "phone",
          ],
          where: { email: email },
        });
        if (user) {
          const isPassword = checkPassword(user.pass, pass);
          if (isPassword) {
            user.pass = undefined;
            data.errCode = 0;
            data.message = "OK";
            data.user = user;
          } else {
            data.errCode = 3;
            data.message = "Mật khẩu không đúng";
          }
        } else {
          data.errCode = 2;
          data.message = "Người dùng không tồn tại";
        }
      } else {
        data.errCode = 1;
        data.message = "Nhập email không đúng";
      }

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

let getAllUsers = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const users = await db.User.findAll({ raw: true });
      if (users) {
        const data = {
          errCode: 0,
          message: "OK",
          users,
        };
        resolve(data);
      }
    } catch (error) {
      reject(error);
    }
  });
};
let createUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const req = {};
      let check = await checkEmail(data.email);
      if (check === true) {
        req.errCode = 1;
        req.message = "email đã tồn tại";
      } else {
        let hash = await hashPassword(data.pass);
        await db.User.create({
          email: data.email,
          pass: hash,
          name: data.name,
          address: data.address,
          phone: data.phone,
          role: 0,
          status: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        req.errCode = 0;
        req.message = "OK";
      }

      resolve(req);
    } catch (error) {
      reject(error);
    }
  });
};

let checkEmail = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.findOne({
        where: { email: email },
        raw: true,
      });
      if (user) {
        resolve(true);
      }
      resolve(false);
    } catch (error) {
      reject(error);
    }
  });
};
let checkPassword = (hash, password) => {
  return bcrypt.compareSync(password, hash);
};

let hashPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      var hash = await bcrypt.hashSync(password, salt);
      resolve(hash);
    } catch (error) {
      reject(error);
    }
  });
};
module.exports = {
  userLoginServicer: userLoginServicer,
  getAllUsers: getAllUsers,
  createUser: createUser,
};
