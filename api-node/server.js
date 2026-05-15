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
    const { email, password } = req.body; // Recebidos do App
    const name = email.split("@")[0]; // Pega o nome antes do @ como provisório

    try {
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        // Usando os nomes exatos do seu novo SQL:
        const sql =
            "INSERT INTO Users (name, email, password, created_at) VALUES (?, ?, ?, NOW())";

        db.query(sql, [name, email, passwordHash], (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: "E-mail já cadastrado." });
            }
            return res.status(201).json({ message: "Usuário criado!" });
        });
    } catch (error) {
        res.status(500).send("Erro no servidor.");
    }
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
