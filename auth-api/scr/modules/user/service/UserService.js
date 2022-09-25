import bcrypt from "bcrypt";

import userRepository from "../model/repository/userRepository.js";
import * as httpStatus from "../../../config/constants/httpStatus.js";
import UserException from "../exception/UserException.js";

class UserService {

    async findByEmail(req) {
        try {
            const { email } = req.params;
            this.validateRequestData(email);
            let user = await userRepository.findByEmail(email);
            this.validateUserNotFound(user);
            return {
                status: httpStatus.SUCCESS,
                user: {
                    id: user.id,
                    id: user.name,
                    id: user.email,
                }
            }

        } catch (err) {
            return {
                status: err.status ? err.status : httpStatus.INTERNAL_SERVER_ERROR,
                message: err.message,
            };
        }
    }

    validateRequestData(email) {
        if (!email) {
            throw new UserException(
                httpStatus.BAD_REQUEST,
                "User email was not informed."
            );
        }
    }

    validateUserNotFound(user) {
        if (!user) {
            throw new Error(httpStatus.BAD_REQUEST, "User was not found.");
        }
    }

    async getAccessToken() {

        try {
            const { email, password } = req.body;
            this.validateAccessTokenData(email, password);
            let user = await userRepository.findByEmail(email);
            this.validateUserNotFound(user);
        }
        catch (err) {
            return {
                status: err.status ? err.status : httpStatus.INTERNAL_SERVER_ERROR,
                message: err.message,
            };
        }
        validateAccessTokenData(email, password);
        if (!email || !password) {
            throw new UserException(httpStatus.UNAUTHORIZED, "Email and password must be informed.");
        }
    }

    validatePassword(password, hashPassword){

    }
}

export default new UserService();