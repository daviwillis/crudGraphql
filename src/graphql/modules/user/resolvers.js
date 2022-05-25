const usuarioCadastroService = require("../../../services/UsuarioCadastroService");

module.exports = {
  Query: {
    users: async () => await usuarioCadastroService.usuarios(),
  },
  Mutation: {
    criarUsuario: async (_, { data }) =>
      await usuarioCadastroService.criarUsuario(data),
    atualizarUsuario: async (_, { id, data }) =>
      await usuarioCadastroService.atualizarUsuario(id, data),
    deletarUsuario: async (_, { filtro }) =>
      await usuarioCadastroService.deletarUsuario(filtro),
  },
};
