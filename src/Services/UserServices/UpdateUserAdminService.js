
class UpdateUserAdminService {
    constructor(userRepository) {
        this.userRepository = userRepository
    }
    async execute(user_id) {
        const userAdm = await this.userRepository.updateUserAdmin(user_id)
        return userAdm
    }
}

module.exports = UpdateUserAdminService