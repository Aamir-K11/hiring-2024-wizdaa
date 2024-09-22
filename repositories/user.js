import GenericRepository from "./generic.js";
import REPOSITORY from './constants/index.js';

export default class UserRepository extends GenericRepository {
    constructor() {
        super(REPOSITORY.USER)
    }
}