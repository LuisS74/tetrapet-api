import UserModel from '../models/user.model.js';
import bcrypt from 'bcrypt';

async function createUser(req, res) {
    try {
        const { name, email, dni, password } = req.body;

        if (!name || !email || !dni || !password) {
            return res.status(400).json({ error: 'Faltan campos requeridos' });
        }

        if (!validarEmail(email)) {
            return res.status(401).json({ error: 'Correo electrónico inválido' });
        }

        if(!Fn.validaRut(dni)){
            return res.status(401).json({ error: 'Dni inválido' });
        }

        const encryptedPassword = bcrypt.hashSync(password, 10);

        const userCreated = await UserModel.create({ name, email, dni, password: encryptedPassword });

        res.send(userCreated);
    } catch (err) {
        res.status(500).send(err);
    }
}

function validarEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

//Fuente: https://gist.github.com/donpandix/f1d638c3a1a908be02d5
//Sin puntos y con guión
var Fn = {
    validaRut: function (rutCompleto) {
        if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto))
            return false;
        var tmp = rutCompleto.split('-');
        var digv = tmp[1];
        var rut = tmp[0];
        if (digv == 'K') digv = 'k';
        return (Fn.dv(rut) == digv);
    },
    dv: function (T) {
        var M = 0, S = 1;
        for (; T; T = Math.floor(T / 10))
            S = (S + T % 10 * (9 - M++ % 6)) % 11;
        return S ? S - 1 : 'k';
    }
}

export {
    createUser,
};