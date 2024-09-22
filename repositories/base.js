import { PrismaClient } from "@prisma/client";

export default class BaseRepository {

    constructor() {
        this.prismaClient = new PrismaClient();
    }

    async close() {
        this.prismaClient.$disconnect();
    }
}