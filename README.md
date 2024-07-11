# Projeto Tela de Login

## Descrição

Este projeto consiste em uma tela de login desenvolvida em Node.js com Express, utilizando bcryptjs para criptografia de senhas e cookie-parser para manipulação de cookies. Ele permite aos usuários realizar cadastro, recuperação de senha e login de forma segura. Após o login, usuários aprovados têm acesso a um dashboard onde podem aprovar outros usuários.

## Tecnologias Utilizadas

- Node.js  
- Express
- bcryptjs
- cookie-parser
- dotenv
- cors
- mysql
- nodemailder

<div style="display: flex; justify-content: center;">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" width="100px" height="100px" style="margin: 0 20px;"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" width="100px" height="100px" style="margin: 0 20px;"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" width="100px" height="100px" style="margin: 0 20px;"/>
</div>


## Funcionalidades Principais

- Registro de novos usuários com criptografia de senhas.
- Recuperação de senha via e-mail.
- Autenticação segura com gerenciamento de sessões usando cookies.
- Dashboard para usuários aprovados onde podem aprovar outros usuários.

## Instalação

1. Clone o repositório: `git clone https://github.com/ramontrndd/login-backend.git`
2. Instale as dependências: `npm install`
3. Configure as variáveis de ambiente conforme necessário.
4. Inicie o servidor: `npm run dev`

## Variáveis de Ambiente.

1. DB_PORT - `3306` 
2. DB_HOST -  `localhost` 
3. DB_USER=  `root` - 
4. DB_PASSWORD= `****`
5. DB_NAME= `Database` 
6. USER=user - pode seguir com essa variave pois ela é responsável pelo checkRole. 

***//Nodemailder //***

1. EMAIL_USER=  `*****`
2. EMAIL_PASSWORD= `*****`

Caso queria testar o serviço de recuperação de senha o nodemailer está pre-configurado com outlook, basta inserir um email e senha do outlook nas variáveis de ambientes do dotenv.


## Autor

Ramon Trindade <ramonbraintrindade@gmail.com>

