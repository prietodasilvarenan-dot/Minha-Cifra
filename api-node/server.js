const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "admin",
    password: "123456",
    database: "minha-cifra",
});

app.post("/register", async (req, res) => {
    const { email, password } = req.body;
    try {
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        const sql = "INSERT INTO users (email, password) VALUES (?, ?)";
        db.query(sql, [email, passwordHash], (err, result) => {
            if (err) {
                console.error(err);
                return res
                    .status(500)
                    .json({ error: "Erro ao cadastrar ou e-mail já existe." });
            }
            return res.status(201).json({ message: "Usuário criado!" });
        });
    } catch (error) {
        res.status(500).send("Erro interno no servidor.");
    }
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
