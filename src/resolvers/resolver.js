import { LibClientes } from "../lib";
const resolvers = {
  getClientes: () => {
    return LibClientes.getClientes();
  },
  getCliente: ({ input }) => {
    return LibClientes.getCliente(input);
  },
  crearCliente: ({ input }) => {
    return LibClientes.newCliente(input);
  }
};
export default resolvers;
