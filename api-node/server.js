const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'minha-cifra'
});

app.post('/register', (req, res) => {
    const { email, password} = req.body;
    try {
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        const sql = 'INSERT INTO users (email, password) VALUES (?, ?)';
        db.query(sql, [email, password], (err, result) => {
            if (err) return res.status(500).json(err);
            return res.status(201).json({ message: "Usuário criado!" });
        });
    } catch (error){
        res.status(500).send("Erro no servidor.");
    }

});

app.listen(3000, () =>{ 
    console.log("Servidor: porta 3000")
});