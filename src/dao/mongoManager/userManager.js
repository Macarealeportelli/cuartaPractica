import { usersModel } from "../models/users.model.js";

export default class UsersManager{

    async findUsers(email, password){
        try {
            const user = await usersModel.find({email:email, password:password})
            return user
        } catch (error) {
            return error
        }
    }

    async findUserById(id){
        try {
            const user = await usersModel.findById(id)
            return user
        } catch (error) {
            return error
        }
    }

    async addUser(obj){
        try {
            const newUser = await usersModel.create(obj)
            return newUser
        } catch (error) {
            return error
        }
    }

    async updateUser(_id, obj){
        try {
            const updatedUser = await usersModel.findByIdAndUpdate(_id, obj)
            return updatedUser
        } catch (error) {
            return error
        }
    }

    async deleteUser(id){
        const deletedUser = await usersModel.findByIdAndDelete(id)
        return deletedUser
    }
}