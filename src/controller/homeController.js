import db from "../models/index";
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        console.log(data);
        return res.send("Hello World");
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getHomePage: getHomePage };