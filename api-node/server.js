const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "USER",
  password: "SENHA",
  database: "minhacifra",
});

app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const name = email.split("@")[0];

  try {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

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

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const sql = "SELECT * FROM Users WHERE email = ?";

    db.query(sql, [email], async (err, results) => {
      if (err) {
        console.error("Erro ao buscar usuário:", err);
        return res.status(500).json({ error: "Erro interno no servidor." });
      }

      if (results.length === 0) {
        return res.status(401).json({ error: "E-mail ou senha incorretos." });
      }

      const user = results[0];

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({ error: "E-mail ou senha incorretos." });
      }

      return res.status(200).json({
        message: "Login realizado com sucesso!",
        user: {
          id: user.pk_users_id,
          name: user.name,
          email: user.email,
        },
      });
    });
  } catch (error) {
    console.error("Erro na rota de login:", error);
    res.status(500).json({ error: "Erro interno no servidor." });
  }
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Servidor rodando na porta 3000');
});
