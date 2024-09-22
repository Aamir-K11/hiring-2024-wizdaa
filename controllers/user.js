import UserService from "../services/user.js";

export default class UserController {

    constructor() {
        this.userService = new UserService();
    }

    getAllUsers = async (req, res) => {
        const data = await this.userService.getAllUsers();
        return res.send(data);
    }
}
