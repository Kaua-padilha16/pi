
const { compare } = require('bcryptjs');
const knex = require('../database/knex')
const AppError = require('../utils/AppError');
const authConfig = require('../configs/auth');
const {sign} = require('jsonwebtoken');
 
 
class SessionsController {
    async create(req, res) {
        const {email, password} = req.body;
 
        const adm = await knex("adm").where({email}).first()
 
        if(!adm) {
            return res.status(400).json("E-mail e/ou senha incorreta.")
        }
        
        const passwordMatched = await compare(password, adm.password)
 
        if(!passwordMatched) {
            return res.status(400).json("E-mail e/ou senha incorreta")
        }
 
        const {secret, expiresIn} = authConfig.jwt
 
        const token = sign({}, secret, {subject: String(adm.id), expiresIn})
 
        res.status(201).json({token,adm})
 
    }
}

 
module.exports = SessionsController
