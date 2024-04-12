const knex = require("../database/knex")
const { hash } = require("bcryptjs");

const AdmRepository = require("../Repositories/admRepository/admRepository");
const CreateAdmService = require("../Services/admServices/createAdmService");
const ListAdmService = require("../Services/admServices/listAdmService")
const UpdateAdmService = require("../Services/admServices/updateAdmService")
const DeleteAdmService =  require("../Services/admServices/deleteAdmService")

const admRepository = new AdmRepository()

const createAdmService = new CreateAdmService(admRepository)
const listAdmService = new ListAdmService(admRepository)
const updateAdmService = new UpdateAdmService(admRepository)
const deleteAdmService = new DeleteAdmService(admRepository)

class AdmController {

async createAdm(req, res) {
    const {name, email, password, fone, cpf, passwordAdm} = req.body;
    const hashedPassword = await hash(password, 8);
    const hashedPasswordAdm = await hash(passwordAdm, 8);

    const adm = await createAdmService.execute({name, email, password: hashedPassword, fone, cpf, passwordAdm: hashedPasswordAdm})

    return res.status(201).json(adm)
    }
    async listAdm(req, res){
        const adm = await listAdmService.execute()
        return res.status(201).json(adm)
    }
    async updateAdm(req, res){
        const {id} = req.params
        const {name, email, password, fone, cpf, passwordAdm} = req.body
        const hashedPassword = await hash(password, 8);
        const hashedPasswordAdm = await hash(passwordAdm, 8);
        await updateAdmService.execute({id, name, email, password: hashedPassword, fone, cpf, passwordAdm: hashedPasswordAdm})

        return res.status(201).json("Atualizado")
    }
    async deleteAdm(req, res){
        const {id} = req.params

        await deleteAdmService.execute({id})

        return res.status(200).json("Você não é mais ADM")
    }
}

module.exports = AdmController