# bluecore-template-node-ejs
Template de projeto monolito, com arquitetura simples, utilizando:
  - Node
  - ExpressJS
  - EJS
  - SQL Server

### Libs
  - Dotenv
  - JWT
  - *Database*
    - MSSQL
  - *Framework*
    - Express
      - Express EJS Layouts
      - Express Validator
    - EJS (html engine template)
    - Body Parser
    - Multer
    - Cookie Parser
    - Cors
  - *Logs*
    - Morgan
    - Winston
      - Winston Rotate File

### Instalação
Para realizar a instalação da aplicação:
 - Executar o romando `npm install`
### Executar em desenvolvimento
Para realizar a execução da aplicação em desenvolvimento:
 - Executar o romando `npm run dev`
 - A aplicação rodará na porta **3000**
### Execução em produção
Para realizar a execução da aplicação em produção:
 - Executar o comando `npm start`
### Lint Check
Para realizar a verificação do ESLINT:
 - Executar o romando `npm run lint`
### Lint Fix
Para forçar o ajuste do ESLINT:
 - Executar o romando `npm run lint:fix`