const db = require("../db");

class UsuarioCadastroService {
  constructor(service){
      this.service = service
  }  
  usuarios = async () => await this.service("users");
  criarUsuario = async (data) =>
    await (
      await this.service("users").insert(data).returning("*")
    )[0];
  atualizarUsuario = async (id, data) =>
    await (
      await this.service("users").where({ id }).update(data).returning("*")
    )[0];
  deletarUsuario = async (filtro) => {
    if (filtro.id) {
      return await this.service("users").where({ id: filtro.id }).delete()
    }

    if (filtro.cpf) {
      return await this.service("users").where({ cpf: filtro.cpf }).delete()
    }

    throw new Error("Favor passar um parâmetro!")
  }
}

module.exports = new UsuarioCadastroService(db)
