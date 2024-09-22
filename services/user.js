import UserRepository from '../repositories/user.js';

export default class UserService {

    constructor() {
        this.userRepository = new UserRepository();
    }

    getAllUsers = async () => {
        return await this.userRepository.getAll();
    }
}