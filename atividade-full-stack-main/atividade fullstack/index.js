const express = require("express")
const exp = express()
const cors = require("cors")
const User = require("./usuario")


exp.use(cors())
exp.use(express.json())


exp.post("/enviarusers", (req, res) => {
    const { nome, email, senha } = req.body

    console.log(nome, email, senha)

    User.create({
        nome: nome,
        email: email,
        senha: senha,
    }).then((sendusers) => {
        console.log(sendusers.toJSON()) // Linha para limpeza de Dados
        res.send("Deu certo!")
    })

})

exp.get("/usuarios", (req, res) => {
    User.findAll({
    }).then((Testemunhas) => {
        console.log(Testemunhas.map(Testemunhas => Testemunhas.toJSON())) // Linha para limpeza de Dados
        res.send(Testemunhas)
    }).catch((error) => {
        console.log(error)
    })
})

// Atualizar um usuário
exp.put('/atualizar/:codigo', async (req, res) => {
    const { codigo } = req.params;
    const { nome, email, senha } = req.body;

    try {
        const user = await User.findByPk(codigo);
        if (!user) return res.status(404).send('Usuário não encontrado');

        await user.update({ nome, email, senha });

        console.log('Usuário atualizado com sucesso');
        res.send(user);
    } catch (error) {
        console.log(`Erro ao atualizar usuário: ${error.message}`);
        res.status(500).send('Erro ao atualizar usuário');
    }
});

exp.delete('/deletaruser/:codigo', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.codigo);

        if (!user) {
            res.status(404).send('Usuário não encontrado.');
        } else {
            await user.destroy();
            res.send('Usuário excluído com sucesso.');
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Erro ao excluir usuário.');
    }
});



//Porta do servidor
exp.listen(7000, () => {
    console.log("server on")
})      
