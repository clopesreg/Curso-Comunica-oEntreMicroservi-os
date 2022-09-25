class UserException extends Error {
    constructor(status, message) {
this.status = status;
this.message = message;
this.name = this.constructor.name;
Error.captureStackTrace (this.this.constructor);
    }
}

export default UserException;