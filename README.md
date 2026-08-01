# Minha Cifra - Sistema de Gestão Financeira

O **Minha Cifra** é um ecossistema completo de gestão financeira pessoal desenvolvido como projeto de conclusão de curso (TCC). O sistema permite que os usuários controlem suas receitas, despesas, faturamento e impostos de forma inteligente, rápida e facil.
O projeto adota uma arquitetura **Full Stack**, separando totalmente a interface móvel (Frontend) da inteligência de negócios e persistência de dados (Backend).

---

## Arquitetura do Projeto

O ecossistema é dividido em três camadas principais estruturadas sob o princípio de **Separação de Responsabilidades (SOC)**:

1. **Mobile (Frontend):** Desenvolvido em **React Native** com **Expo** (TypeScript), utilizando navegação baseada em arquivos (`expo-router`) e componentes desacoplados.
2. **API (Backend):** Servidor centralizado em **Node.js** com **Express**, responsável pelas regras de negócio, rotas de autenticação e comunicação segura.
3. **Banco de Dados (Database):** Sistema gerenciador **MariaDB** estruturado de forma relacional para garantir a integridade dos dados financeiros.

---

## Tecnologias Utilizadas

### Frontend (Mobile)
* **React Native & Expo** (SDK mais recente)
* **TypeScript** para tipagem estática e segurança do código
* **Axios** para requisições HTTP à API Rest
* **Expo Router** para navegação nativa avançada

### Backend (API)
* **Node.js** como ambiente de execução
* **Express** para roteamento HTTP
* **Bcrypt** para hash seguro de senhas antes da persistência
* **MySQL2** para driver de conexão com o banco de dados

### Banco de Dados
* **MariaDB** (Rodando localmente)
* **DBeaver** como ferramenta de gerenciamento (SGDB)
