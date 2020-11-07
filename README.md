### Desafio Técnico Developer

_Autor: Pedro Gallardo_

#### Pré requisitos

* [Node](https://nodejs.org/en/download/) versão 10 ou mais recente
* [MongoDB](https://docs.mongodb.com/manual/administration/install-community/) ou ter uma conta em [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

#### Setup

##### 1. Instale dependências

    npm install
    
##### 2. Banco de dados

* Renomear o arquivo `.env` para `.env.local`
* Edite as variáveis `MONGODB_DB` e `MONGODB_URI`
* Migrar o banco de dados:

      migrate-mongo up

##### 3. Executar aplicativo

Servidor de desenvolvimento:

    npm run dev
    
Servidor de produção:

    npm run build
    npm start

O aplicativo pode ser acessado em:

* [http://localhost:3000](http://localhost:3000)


