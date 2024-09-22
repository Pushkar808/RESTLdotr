const UsersSchema = require("../schema/Users")
class Users {
    async fetchallUsers(req, res) {
        try {
            const users = await UsersSchema.find();
            return res.status(200).json({
                status: true,
                message: "Success",
                data: users
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                status: false,
                message: "Internal Server Error",
                data: null
            });
        }
    }
    async getUserbyEmail(req, res) {
        try {
            const { email } = req.query
            const users = await UsersSchema.find({
                email: { $regex: email, $options: "i" } // Case-insensitive search
            });

                return res.status(200).json({
                status: true,
                message: "Success",
                data: users
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                status: false,
                message: "Internal Server Error",
                data: null
            });
        }
    }
    async setUser(req, res) {
        try {
            const { email, age, name } = req.body;
            console.log(req.body)
            if (email, age, name) {
                const users = await UsersSchema.create({ email: email, age: age, name: name });
                res.status(200).json({
                    status: true,
                    message: "Success",
                    data: users
                });
            } else
                throw "Some Error in Inserting"
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                status: false,
                message: "Internal Server Error",
                data: null
            });
        }
    }
}
module.exports = new Users();