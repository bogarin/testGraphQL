import models from "./modelsResolver";
module.exports = {
  getClientes: () => {
    return models.Clientes.getClientes();
  },
  getCliente: ({ input }) => {
    return models.Clientes.getCliente(input);
  },
  crearCliente: ({ input }) => {
    return models.Clientes.newCliente(input);
  }
};
