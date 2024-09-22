import BaseRepository from "./base.js";

export default class GenericRepository extends BaseRepository {

    constructor(modelName) {
        super();
        this.model = this.prismaClient[modelName];
    }

    getAll = async () => {
        return await this.model.findMany();
    }
}