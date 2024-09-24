export class Exception extends Error {
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }
}

export class BadRequestException extends Exception {
    constructor(message) {
        super(400, message);
    }
}

export class InternalErrorException extends Exception {
    constructor(message) {
        super(500, message);
    }
}


export class ForbiddenException extends Exception {
    constructor(message) {
        super(403, message);
}
}
