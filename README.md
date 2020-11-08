### Desafio Técnico Developer

_Autor: Pedro Gallardo_

##
#### Começo Rápido

* `git clone https://github.com/mescalinico/plathanus-test.git`
* `cd plathanus-test`
* `docker-compose up -d`
* `docker-compose exec app npm run migrate up`

Front-end: [http://localhost:3000](http://localhost:3000)

##
#### Sem Docker

###### Pré requisitos

* [Node](https://nodejs.org/en/download/) >= 10
* [MongoDB](https://docs.mongodb.com/manual/administration/install-community/) ou [Atlas](https://www.mongodb.com/cloud/atlas)


##### Instale dependências

    npm install
    
##### Banco de dados

* Abra o arquivo **.env** e edite as variáveis de conexão
* Atualize o banco de dados `migrate-mongo up`
      
##### Executar aplicativo

Desenvolvimento

    npm run dev
    
Produção

    npm run build
    npm start

##
#####