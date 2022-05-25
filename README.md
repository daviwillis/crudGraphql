# API graphql
Teste para Stefanini.

Olá, fui desafiado a criar uma <b>API</b> utilizando graphql onde deveria persistir e ler dados em um banco de dados relacional.<br>
A API contém uma <b>query</b> para consulta de dados dos Usuários e três <b>mutations</b> onde você poderá criar, atualizar dados e excluir. <br>
<br>
Tecnologias utilizadas no desafio:
- Graphql
- Apollo Server
- Knex
- Postgres
- Dbeaver

Banco de dados Postgres utilizando docker.

<b>Comandos necessários para rodar a aplicação:</b>
<h4> Instalação das dependências </h4>
 npm install
 
<br>
<h4> Criação container </h4>
docker run --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=docker -d postgres

<h4> Conexão Knex com Banco de Dados </h4>
npx knex migrate:latest

<h4> Iniciar aplicação </h4>
npm start
      

<h4>Imagens detalhadas do funcionamento da API estão em <b>Issues</b>.</h4>
<h6>Aplicação testada em ambiente Windows.</h6>
<br>


<div align="center">
  <div title><b>Query and Mutations</b></div>
  <br>
  <img src="https://user-images.githubusercontent.com/51123651/170269369-3d3e39ec-fe6a-4489-954c-8213be5b6c28.png" width="700px">
  </div>
